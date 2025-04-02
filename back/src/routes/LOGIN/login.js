const { Router } = require("express");
const { User } = require("../../db");
const bcryptjs = require("bcryptjs");
const { generToken } = require("../UTILS/jwt");

const router = Router();

router.post("/", async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({
      ok: false,
      msg: "Usuario y contraseña son requeridos",
    });
  }

  try {
    // Buscar el usuario en la base de datos
    const userDetails = await User.findOne({ where: { user } });

    if (!userDetails) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no registrado",
      });
    }

    // Verificar si el usuario está activo
    if (!userDetails.active) {
      return res.status(403).json({
        ok: false,
        msg: "Usuario inactivo, contacte al administrador",
      });
    }

    // Validar la contraseña
    const validatePassword = await bcryptjs.compare(password, userDetails.password);
    if (!validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario o contraseña incorrectos",
      });
    }

    // Generar el token, incluyendo el rol del usuario
    const token = await generToken(userDetails.id, userDetails.user, userDetails.role);

    return res.json({
      ok: true,
      id: userDetails.id,
      user: userDetails.user,
      role: userDetails.role,
      token,
      msg: "Sesión iniciada correctamente",
    });
  } catch (error) {
    console.error("Error en el login:", error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
});

module.exports = router;