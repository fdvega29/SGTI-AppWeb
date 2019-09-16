//Requerimos los paquetes necesarios
const express = require ('express');
const path = require('path');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const expSession = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

// Inicializar servidor
const app = express();
require('./database'); //declaran el archivo database.js 
require('./config/passport');


app.set('port',process.env.PORT || 4000);

    //Vistas
    app.set('views', path.join(__dirname, 'views'));
    //Motor de plantillas
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

//Middlewares funcion que se ejecuta antes de una accion/operacion
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(expSession({
    secret: 'app-secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());    


//Varibles Globales
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null; 
    next();
});

//routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/form'));
app.use(require('./routes/panel'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Servidor escuchando
app.listen(app.get('port'),()=>{
    //Mostrar por consola el puerto 
    console.log('Server on port', app.get('port'));
});

