const { Router } = require('express');

    // User
const userPost = require("./POST/account")

const router = Router();

    // User
    router.use('/createUser', userPost);

module.exports = router;