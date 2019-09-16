const express = require('express');
const router = express.Router();
const validate = require('validate.js');

const { isAuthenticated } = require('../helpers/autenticar');

router.get('/form/add', isAuthenticated, (req, res) =>{
    res.render('form/new-form');
});

router.post('/form/add', (req, res) =>{
    const { apeTit, nomTit, apeConyu, nomConyu, fechNac, nacionalidad, estCivil, nupcias, extrg,
    poli, pasaporte, pais, domicilio, irpc} = req.body;
        
   
    
});



module.exports = router;