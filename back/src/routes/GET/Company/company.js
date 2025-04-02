const { Router } = require("express");
const { isSuperAdmin, isAdminOrSuperAdmin } = require("../UTILS/role_authentication");

const router = Router();

router.get("/companies", isSuperAdmin, async (req, res) => {
    try {
        const companies = await Company.findAll({ attributes: ["company_ID", "company_name"] });
        res.status(200).json(companies);
    } catch (error) {
        console.error("Error al listar compañías:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});

module.exports = router;