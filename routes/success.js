const express = require('express');
const path = require('path');
const successController = require('../controller/success')

const router = express.Router();

router.get('/',successController.getSuccess);

module.exports = router;
