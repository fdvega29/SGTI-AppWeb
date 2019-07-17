const express = require('express'); //Requerimos de nuevo express
const router = express.Router(); //Utilizamos el metodo Router


//-Agregando las Routes

//index
router.get('/', (req, res) => {
    res.render('index');
});

//About
router.get('/about', (req, res) => {
    res.render('about');
});

//Panel
router.get('/panel', (req, res) => {
    res.render('panel');
});




module.exports = router; //exportar la ruta para poder reutilizarla
