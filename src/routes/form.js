const express = require('express');
const router = express.Router();
const validate = require('validate.js');

const { isAuthenticated } = require('../helpers/autenticar');

router.get('/form/minuta-A', isAuthenticated, (req, res) =>{
    res.render('form/minuta-A');
});

router.post('/form/add', (req, res) =>{
    const { apeTit, nomTit, apeConyu, nomConyu, fechNac, nacionalidad, estCivil, nupcias, extrg,
    poli, pasaporte, pais, domicilio, irpc} = req.body;
         
});

router.get('/form/minuta-H', isAuthenticated, (req, res)=>{
    res.render('form/minuta-H');
});

router.get('/form/minuta-C', isAuthenticated, (req, res)=>{
    res.render('form/minuta-C');
});



module.exports = router;