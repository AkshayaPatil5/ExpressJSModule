const path=require('path');
const rootDir = require('../util/path');

exports.addProduct = (req,res,next)=>{
  res.sendFile(path.join(rootDir,'view','addproduct.html'));
}

exports.getProduct= (req,res,next)=>{
  console.log(req.body);
  res.redirect('/')
}





