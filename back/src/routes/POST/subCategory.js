const { Router } = require("express");
const { Subcategory } = require('../../db');

const router = Router();

router.post("/", async function( req, res) {
    const {
        subcategoryId,
        sub_categoty_name,
        categoryId,
        active
    } = req.body;

    try {
        const verificacion = await Subcategory.findOne({
            where: {
                sub_categoty_name: sub_categoty_name,
            },
        });
        
        if(!verificacion){

            Subcategory.create({
                subcategoryId: subcategoryId,
                sub_categoty_name: sub_categoty_name,
                categoryId: categoryId,
                active: active
            }).then((subCategoria) => res.status(201).send(subCategoria))
        } else{
            return res
                .status(400)
                .json({ message: "Sub categoria existente" });
        }

    } catch (err) {
        console.log(err, "ACA ESTOY")
        res.json(err);
    }
});

module.exports = router;