const { Router } = require("express");
const bcryptjs = require("bcryptjs");
const { User } = require("../../db");
const { isAdminOrSuperAdmin } = require("../UTILS/role_authentication");
const {authenticate} = require("../UTILS/jwt")

const router = Router();

// Ruta para crear admin o empleado (tanto superAdmin como admin pueden crear admin y empleado)
router.post("/", authenticate, isAdminOrSuperAdmin, async (req, res) => {
    const { name, lastName, user, password, active = true, role } = req.body;

    // Validación básica
    if (!name || !user || !password || !role) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Validar que el rol sea admin o employer
    const allowedRoles = ['admin', 'employer'];
    if (!allowedRoles.includes(role)) {
        return res.status(400).json({ message: "Invalid role. Only 'admin' or 'employer' allowed." });
    }

    try {
        // Verificar usuario duplicado
        const existingUser = await User.findOne({ where: { user } });
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "User already registered" });
        }

        // Hash de la contraseña
        const passwordHash = await bcryptjs.hash(password, 10);

        // Crear usuario
        const newUser = await User.create({
            name,
            lastName,
            user,
            password: passwordHash,
            active,
            role, 
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                lastName: newUser.lastName,
                user: newUser.user,
                active: newUser.active,
                role: newUser.role,
            }
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;