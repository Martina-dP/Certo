const { Router } = require('express');

    // Admin
const adminGet = require("./GET/Admin/admin")

    // User
const userPost = require("./POST/account")

    // Otros
const login = require("./LOGIN/login")

const router = Router();

    // Admin
router.use('/admins', adminGet);

    // User
router.use('/createUser', userPost);

    // Otros
router.use('/logIn', login);

module.exports = router;