const { Router } = require("express");
const bcryptjs = require("bcryptjs");
const { User } = require("../../db");
const { isSuperAdmin } = require("../UTILS/role_authentication");

const router = Router();

// Ruta para crear el superAdmin (solo se debería ejecutar una vez)
router.post("/create-superadmin", isSuperAdmin, async (req, res) => {
    const { user, password, name, lastName } = req.body;

    // Verificar si ya existe un superAdmin
    const existingSuperAdmin = await User.findOne({ where: { role: 'superAdmin' } });
    if (existingSuperAdmin) {
        return res.status(400).json({ message: "Ya existe un superAdmin en el sistema." });
    }

    // Hash de la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    try {
        // Crear el superAdmin
        const superAdmin = await User.create({
            user,
            password: passwordHash,
            name,
            lastName,
            role: 'superAdmin',
            active: true,
        });

        res.status(201).json({
            message: "SuperAdmin creado exitosamente.",
            user: {
                id: superAdmin.id,
                user: superAdmin.user,
                role: superAdmin.role,
            }
        });
    } catch (error) {
        console.error("Error al crear superAdmin:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});

module.exports = router;