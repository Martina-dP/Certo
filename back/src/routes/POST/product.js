const { Router } = require("express");
const { Product } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    const {
        productId,
        color,
        cost,
        size,
        profit_margin,
        final_price,
        min_stock,
        categoryId,
        subcategoryId,
        active,
    } = req.body;

    // Validación básica
    if (!productId || !color || !cost || !size) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Crear y guardar el producto
        const newProduct = await Product.create({
            productId,
            color,
            cost,
            size,
            profit_margin,
            final_price,
            min_stock,
            categoryId,
            subcategoryId,
            active,
        });

        res.status(201).json(newProduct);
    } catch (err) {
        console.error("Error creating product:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;