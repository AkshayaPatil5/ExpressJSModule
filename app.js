const express = require('express');
const bodyParser = require("body-parser");
const path= require('path')
const app= express();

const adminRoutes=require(`./routes/admin`);
const shopRoutes=require(`./routes/shop`);
const contact=require(`./routes/contact`);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')))



app.use('/admin',adminRoutes);
app.use('/contact',contact);
app.use(shopRoutes);

app.use('/success', (req, res, next) => {
    res.send('Congratulations! Your form was successfully submitted.');
  });

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view','err.html'));

});


app.listen(3000); 