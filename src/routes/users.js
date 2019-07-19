//Sin uso por el momento.
const express = require('express'); //Requerimos de nuevo express
const router = express.Router(); //Utilizamos el metodo Router
const Users = require('../models/Users'); //Requiero el modelo usuario.

//Ruta de acceso iniciar sesion.
router.get('/users/signin', (req,res) => {
    res.render('users/signin');
});

router.post('/users/signup', (req, res) => {

});

//Ruta de acceso registro.
router.get('/users/signup', (req,res) => {
    res.render('users/signup');
});

//Con el metodo post, resivo los datos enviados desde el body y los almaceno en una constante para trabajar con ellos. 
router.post('/users/signup', async (req, res) =>{
  const { nombre, email, password, confirmPassword } = req.body;
  const errors = [];
  
//Valido los campos  
  if(password != confirmPassword){
      errors.push({text: 'Las contraseñas no coinciden'})
  }
  if(password.length < 4){
      errors.push({text: 'Ingrese 4 o mas caracteres'})
  }

 //Valido campos vacios, mail existentes. 
  if(errors.length > 0){
      res.render('users/signup', {errors, nombre, email, password, confirmPassword});
  }else{
      const emailUsers = await Users.findOne({email: email});
      if(emailUsers){
          req.flash('error_msg', 'El correo ya existe');
          res.redirect('/users/signup');
      }
      //Almaceno los datos ya validados, encripto contraseña y guardo el nuevo registro.
      const newUsers = new Users({nombre, email, password});
      newUsers.password = await newUsers.encryptPassword(password);
      await newUsers.save();
      req.flash('success_msg', 'Estas Registrado');
      res.redirect('/users/signin');
  }

});


module.exports = router; //exportar la ruta para poder reutilizarla
