const { Router } = require("express");
const { Category } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    const { categoryId, category_name, active } = req.body;

    // Validación básica
    if (!category_name) {
        return res.status(400).json({ message: "Category name is required" });
    }

    try {
        // Verificar si la categoría ya existe
        const existingCategory = await Category.findOne({
            where: { category_name },
        });

        if (existingCategory) {
            return res
                .status(400)
                .json({ message: "Category already exists" });
        }

        // Crear nueva categoría
        const newCategory = await Category.create({
            categoryId,
            category_name,
            active,
        });

        res.status(201).send(newCategory);
    } catch (err) {
        console.error("Error creating category:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;