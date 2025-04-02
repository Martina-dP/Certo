const { Router } = require('express');

    // Admin
const adminGet = require("./GET/Admin/admin")

    // User
const userPost = require("./POST/account")
const superUserPost = require("./POST/superAdminAccount");

    // Otros
const login = require("./LOGIN/login")

    // Altas
const newClient = require("./POST/client")
const newProduct = require("./POST/product")
const categoryList = require("./GET/Altas/Category")
const newCategory = require("./POST/category")
const newSubCategory = require("./POST/subCategory")
const subCategoryList = require("./GET/Altas/SubCategory")
const newProvider = require("./POST/provider")

    // Mov. caja
const newBill = require("./POST/bill")

const router = Router();

    // Admin
router.use('/admins', adminGet);

    // User
router.use('/createUser', userPost);
router.use('/', superUserPost);

    // Otros
router.use('/logIn', login);

    // Altas
router.use('/newClient', newClient);
router.use('/newProduct', newProduct);
router.use('/categories', categoryList);
router.use('/loadCategory', newCategory);
router.use('/loadSubCategory', newSubCategory);
router.use('/subCategories', subCategoryList);
router.use('/newProvider', newProvider);

    // Mov. caja
router.use('/newBill', newBill);

module.exports = router;