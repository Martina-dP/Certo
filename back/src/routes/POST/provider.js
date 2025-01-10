const express = require('express');
const router = express.Router();
const { Provider } = require("../../db"); 

// Crear un proveedor
router.post('/providers', async (req, res) => {
    const { organization, description, CUIT, address, state, phone, email } = req.body;

    try {
        // Validaciones de campos requeridos
        if (!organization || !description || !CUIT || !address || !state || !phone || !email) {
            return res.status(400).json({ message: "Todos los campos son requeridos." });
        }

        // Crear el proveedor en la base de datos
        const newProvider = await Provider.create({
            organization,
            description,
            CUIT,
            address,
            state,
            phone,
            email,
        });

        res.status(201).json({ message: "Proveedor creado exitosamente.", provider: newProvider });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: "El CUIT ya está registrado." });
        }

        console.error('Error al crear el proveedor:', error);
        res.status(500).json({ message: "Ocurrió un error al crear el proveedor." });
    }
});

module.exports = router;