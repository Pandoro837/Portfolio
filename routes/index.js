const express = require('express');
const router = express.Router();

const main = require('./main.js');
const cms = require('./cms.js');

router.use('/', main);
router.use('/cms', cms);

module.exports = router;