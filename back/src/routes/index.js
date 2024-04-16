const { Router } = require('express');

    // Admin
const adminGet = require("./GET/Admin/admin")

    // User
const userPost = require("./POST/account")

    // Otros
const login = require("./LOGIN/login")

    // Altas
const newProduct = require("./POST/product")

const router = Router();

    // Admin
router.use('/admins', adminGet);

    // User
router.use('/createUser', userPost);

    // Otros
router.use('/logIn', login);

    // Altas
router.use('/newProduct', newProduct);

module.exports = router;