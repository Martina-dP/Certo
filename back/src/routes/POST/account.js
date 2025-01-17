const { Router } = require("express");
const bcryptjs = require("bcryptjs");
const { User } = require("../../db");

const router = Router();

// Middleware para verificar si el usuario es superAdmin
const isSuperAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'superAdmin') {
        return next(); // Permite el acceso
    }
    return res.status(403).json({ message: "Acceso denegado. Solo el superAdmin puede realizar esta acción." });
};

// Middleware para verificar si el usuario es admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next(); // Permite el acceso
    }
    return res.status(403).json({ message: "Acceso denegado. Solo el admin puede realizar esta acción." });
};

// Middleware para verificar si el usuario es admin o superAdmin
const isAdminOrSuperAdmin = (req, res, next) => {
    if (req.user && (req.user.role === 'admin' || req.user.role === 'superAdmin')) {
        return next(); // Permite el acceso
    }
    return res.status(403).json({ message: "Acceso denegado. Solo los usuarios con rol admin o superAdmin pueden realizar esta acción." });
};

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

// Ruta para crear admin o empleado (tanto superAdmin como admin pueden crear admin y empleado)
router.post("/", isAdminOrSuperAdmin, async (req, res) => {
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
            role, // El rol puede ser 'admin' o 'employer'
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