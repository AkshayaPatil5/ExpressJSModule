const path =require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path')

//route = /shop/book
router.get('/',(req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'view', 'shop.html'));
})

module.exports = router;