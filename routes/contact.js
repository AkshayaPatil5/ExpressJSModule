

const express = require('express');
const path = require('path');
const contactController =require('../controller/contact');
const router = express.Router();


router.get('/call',contactController.getContacts);

router.post('/call', contactController.postContacts);



module.exports = router;

