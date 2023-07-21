const path =require('path');
const express = require('express');
const shopController= require('../controller/shop');
const router = express.Router();



//route = /shop/book
router.get('/',shopController.getShop);

module.exports = router;
