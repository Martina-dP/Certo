const { Router } = require("express");
const router = Router();
const { User } = require('../../../db');

router.get("/", async (_req, res) => {

    try {
        const activity = await User.findAll({
            where: {
                role: 1 
            }
        });
        res.json(activity);
    } catch (error) {
        console.error(error);
    }
  });


module.exports = router;