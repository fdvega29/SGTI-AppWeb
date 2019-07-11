//Requerimos los paquetes necesarios
const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');
// Inicializar servidor
const app = express();
//El archivo de la base de datos
require('./database');

//Configuraciones
    //Configuraciondo el puerto
app.set('port',process.env.PORT || 3000);

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


//Varibles Globales

//routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Servidor escuchando
app.listen(app.get('port'),()=>{
    //Mostrar por consola el puerto 
    console.log('Server on port', app.get('port'));
});

