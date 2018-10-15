var express = require('express');
var router = express.Router();

router.get('/',(req, res, next ) => {
    res.redirect('/admin');
});

router.get('/admin', (req, res, next) => {
    res.render('admin/admin');
});

router.get('/login', (req, res, next)=>{
    res.render('admin/login');
})


module.exports = router;