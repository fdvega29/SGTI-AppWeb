//Sin uso por el momento.
const express = require('express'); //Requerimos de nuevo express
const router = express.Router(); //Utilizamos el metodo Router




//SignIn
router.get('/users/signin', (req,res) => {
    res.render('users/signin');
});

//SignUp
router.get('/users/signup', (req,res) => {
    res.render('users/signup');
});



module.exports = router; //exportar la ruta para poder reutilizarla
