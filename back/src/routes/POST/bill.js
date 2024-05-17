const { Router } = require("express");
const { Header } = require('../../db');

const router = Router();

router.post("/", async function( req, res) {
    const {
        operationID,
        prov_client_ID,
        invoice_num,
        date,
        sub_total,
        porcentage_tax,
        import_tax,
        porcentage_IIBB,
        import_IIBB,
        discount,
        total,
        operation_typeID,
        payMethID
    } = req.body;

    try {
        const verificacion = await Header.findOne({
            where: {
                invoice_num: invoice_num,
            },
        });
        if(!verificacion){

            Header.create({
                operationID: operationID,
                prov_client_ID: prov_client_ID,
                invoice_num: invoice_num,
                date: date,
                sub_total: sub_total,
                porcentage_tax: porcentage_tax,
                import_tax: import_tax,
                porcentage_IIBB: porcentage_IIBB,
                import_IIBB: import_IIBB,
                discount: discount,
                total: total,
                operation_typeID: operation_typeID,
                payMethID: payMethID
            }).then((factura) => res.status(201).send(factura))
        } else{
            return res
                .status(400)
                .json({ message: "Numero de factura existente" });
        }

    } catch (err) {
        console.log(err, "aca estoy")
        res.json(err);
    }
});

module.exports = router;