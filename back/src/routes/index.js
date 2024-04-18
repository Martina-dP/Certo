const { Router } = require('express');

    // Admin
const adminGet = require("./GET/Admin/admin")

    // User
const userPost = require("./POST/account")

    // Otros
const login = require("./LOGIN/login")

    // Altas
const newProduct = require("./POST/product")
const categoryList = require("./GET/Altas/Category")
const subCategoryList = require("./GET/Altas/SubCategory")

const router = Router();

    // Admin
router.use('/admins', adminGet);

    // User
router.use('/createUser', userPost);

    // Otros
router.use('/logIn', login);

    // Altas
router.use('/newProduct', newProduct);
router.use('/categories', categoryList);
router.use('/subCategories', subCategoryList);

module.exports = router;