const { Router } = require("express");
const { Category } = require("../../../db")

const router = Router();

router.get("/", async function( req, res) {
    const categories = await Category.findAll({});
    res.json(categories);
});

module.exports = router;