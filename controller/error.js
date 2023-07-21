const path = require('path');
const rootDir = require('../util/path');

exports.getError=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'err.html'));
  
}