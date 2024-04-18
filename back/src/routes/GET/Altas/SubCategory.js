const { Router } = require("express");
const { Subcategory } = require("../../../db")

const router = Router();

router.get("/", async function( req, res) {
    const subCategories = await Subcategory.findAll({});
    res.json(subCategories);
});

module.exports = router;