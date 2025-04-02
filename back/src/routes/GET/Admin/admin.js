const { Router } = require("express");
const router = Router();
const { User } = require('../../../db');

router.get("/", async (_req, res) => {

    try {
        const activity = await User.findAll();
        res.json(activity);
    } catch (error) {
        console.error(error);
    }
  });


module.exports = router;