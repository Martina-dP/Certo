const { Router } = require("express");
const { Product, Category } = require('../../db');

const router = Router();

router.post("/", async function( req, res) {
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
        active} = req.body;

        const productAdded = new Product({
            productId: productId,
            color: color,
            cost: cost,
            size: size,
            profit_margin: profit_margin,
            final_price: final_price,
            min_stock: min_stock,
            categoryId: categoryId,
            subcategoryId: subcategoryId,
            active: active
        })

    try {
        const saveProduct = await productAdded.save()
        console.log(saveProduct);

        res.json(saveProduct);

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;