const { Router } = require("express");
const { Category } = require('../../db');

const router = Router();

router.post("/", async function( req, res) {
    const {
        categoryId,
        categoty_name,
        active
    } = req.body;

    try {
        const verificacion = await Category.findOne({
            where: {
                categoty_name: categoty_name,
            },
        });
        if(!verificacion){

            Category.create({
                categoryId: categoryId,
                categoty_name: categoty_name,
                active: active
            }).then((categoria) => res.status(201).send(categoria))
        } else{
            return res
                .status(400)
                .json({ message: "Categoria existente" });
        }

    } catch (err) {
        console.log(err, "aca estoy")
        res.json(err);
    }
});

module.exports = router;