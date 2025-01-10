const { Router } = require("express");
const { Header } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
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
        payMethID,
    } = req.body;

    // Validación básica
    if (!invoice_num || !date || !total) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Verificar si la factura ya existe
        const existingInvoice = await Header.findOne({
            where: { invoice_num },
        });

        if (existingInvoice) {
            return res
                .status(400)
                .json({ message: "Invoice number already exists" });
        }

        // Crear nueva factura
        const newInvoice = await Header.create({
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
            payMethID,
        });

        res.status(201).send(newInvoice);
    } catch (error) {
        console.error("Error creating invoice:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;