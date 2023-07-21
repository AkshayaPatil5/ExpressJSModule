const path = require('path');
const rootDir = require('../util/path');





exports.getContacts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'contact.html'));
}

exports.postContacts = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
}








