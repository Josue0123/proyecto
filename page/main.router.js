var express = require('express');
var router = express.Router();

router.get('/',(req, res, next ) => {
    res.redirect('main/main');
});

router.get('/usuarios', (req, res, next) => {
    res.render('main/usuarios');
});

module.exports = router;