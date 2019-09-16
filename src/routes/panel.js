const express = require('express');
const router = express.Router();

const {isAuthenticated} = require('../helpers/autenticar');

router.get('/panel/gestion', isAuthenticated, (req, res) =>{
    res.render('panel/gestion');
});

module.exports = router;