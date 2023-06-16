const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('./cms/cms');
// });

router.get('/:type', (req, res) => {
    const {type} = req.params;
    res.render('./cms/cms', {type : type});
});

module.exports = router;