const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contact = require('./routes/contact');
const successRoutes = require('./routes/success');
const errorRoutes=require(`./routes/error`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/contact', contact);
app.use(shopRoutes);
app.use('/success', successRoutes);

app.use(errorRoutes);

app.listen(3000);
 