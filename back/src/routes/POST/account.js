const { Router } = require("express");
const bcryptjs = require("bcryptjs");
const { User } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    const { id, name, lastName, user, password, active, role } = req.body;

    // Validación básica
    if (!name || !user || !password) {
        return res.status(400).json({ message: "Missing required fields" });
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
            id,
            name,
            lastName,
            user,
            password: passwordHash,
            active,
            role,
        });

        res.status(201).send(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;