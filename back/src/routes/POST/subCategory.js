const { Router } = require("express");
const { Subcategory } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    const { subcategoryId, sub_category_name, categoryId, active } = req.body;

    // Validación básica
    if (!sub_category_name || !categoryId) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Verificar si la subcategoría ya existe
        const existingSubcategory = await Subcategory.findOne({
            where: { sub_category_name },
        });

        if (existingSubcategory) {
            return res
                .status(400)
                .json({ message: "Subcategory already exists" });
        }

        // Crear nueva subcategoría
        const newSubcategory = await Subcategory.create({
            subcategoryId,
            sub_category_name,
            categoryId,
            active,
        });

        res.status(201).json(newSubcategory);
    } catch (err) {
        console.error("Error creating subcategory:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;