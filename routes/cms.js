const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./cms/cms')
});

module.exports = router;