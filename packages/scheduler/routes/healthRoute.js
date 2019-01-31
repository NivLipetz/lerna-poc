'use strict';
let express = require('express'),
    router = express.Router();

router.get('/scheduler/health', function (req, res, next) {
    return res.json({status: 'OK'});
});

module.exports = router;