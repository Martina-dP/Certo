const { Router } = require("express");
const { Client } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    const {
        clientId,
        name,
        lastName,
        DNI,
        taxStatus,
        birthday,
        authorizedMargin,
        address,
        state,
        active,
    } = req.body;

    // Validación básica
    if (!DNI || !name || !lastName) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Verificar si el cliente ya existe
        const existingClient = await Client.findOne({ where: { DNI } });
        if (existingClient) {
            return res
                .status(400)
                .json({ message: "Client with this DNI already exists" });
        }

        // Crear nuevo cliente
        const newClient = await Client.create({
            clientId,
            name,
            lastName,
            DNI,
            taxStatus,
            birthday,
            authorizedMargin,
            address,
            state,
            active,
        });

        res.status(201).send(newClient);
    } catch (error) {
        console.error("Error creating client:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;