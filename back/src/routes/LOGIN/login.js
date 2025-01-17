const { Router } = require("express");
const { User } = require("../../db");
const bcryptjs = require("bcryptjs");
const { generToken } = require("../utils/jwt");

const router = Router();

router.post("/", async (req, res) => {
  const { user, password } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const userDetails = await User.findOne({
      where: {
        user: user,
      },
    });

    // Si el usuario no existe, devolver error 404
    if (!userDetails) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no registrado",
      });
    }

    // Validar la contraseña
    const validatePassword = bcryptjs.compareSync(password, userDetails.password);
    if (!validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario o contraseña incorrectos",
      });
    }

    // Generar el token, incluyendo el rol del usuario
    const token = await generToken(userDetails.id, userDetails.user, userDetails.role);

    // Responder con el token y datos del usuario
    return res.json({
      ok: true,
      id: userDetails.id,
      user: userDetails.user,
      role: userDetails.role, 
      token,
      msg: "Sesión iniciada correctamente",
    });

  } catch (error) {
    console.error(error);  

    return res.status(500).json({
      ok: false,
      msg: "Hubo un error al intentar iniciar sesión",
    });
  }
});

module.exports = router;