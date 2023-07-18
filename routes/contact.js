// routes/contact.js (router module)

const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

router.get('/call', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'view', 'contact.html'));
});

router.post('/call', (req, res, next) => {
  console.log(req.body);
  res.redirect('/success');
});

module.exports = router;

