const express = require('express'); //Requerimos de nuevo express
const router = express.Router(); //Utilizamos el metodo Router


//agregar la ruta index
router.get('/', (req, res) => {
    res.render('index');
});


//agregar la ruta about
router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router; //exportar la ruta para poder reutilizarla
