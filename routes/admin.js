const path=require('path');
const express = require('express');
const productController = require('../controller/products');
const router=express.Router();



//route=admin/add-product
router.get('/add-product',productController.addProduct);

router.post('/add-product',productController.getProduct);






module.exports = router;
