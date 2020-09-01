/**
 * aplicacion express
 * 
 */

'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const fileUpload = require('express-fileupload');

const { COMUNIDADES, PAISES, POBLACIONES, PROVINCIAS, MUSICA, CLUBS, DRESSCODE, EVENTS, USERS, SLOTS, ROLES, COMPANIES, PRODUCTS } = require('./Constantes/ConstantesRutas');



const app = express();
app.use(helmet());
app.use(cors());
app.use(compression()); //Compress all routes

// Importamos las rutas
const rGlobal = require('./rutas/rutaGlobal');
const rComunidades = require('./rutas/rutaComunidades');
const rPais = require('./rutas/rutaPaises');
const rPoblacion = require('./rutas/rutaPoblacion');
const rProvincia = require('./rutas/rutaProvincias');
const rMusic = require('./rutas/rutaMusic');
const rClub = require('./rutas/rutaClubs');
const rEvents = require('./rutas/rutaEvents');
const rUsers = require('./rutas/rutaUsers');
const rSlots = require('./rutas/rutaSlots');
const rRoles = require('./rutas/rutaRoles');
const rCompanies = require('./rutas/rutaCompanies');
const rDressCode = require('./rutas/rutaDressCode');
const rProducts = require('./rutas/rutaProducts');
const Autorizado = require('./Autentificacion/middelAut');


//cargar middlewares
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
//Subida de imagenes
app.use(fileUpload({
    useTempFiles: true
}));


// Cargamos las rutas
app.use('/', rGlobal);
app.use(COMUNIDADES, Autorizado, rComunidades);
app.use(PAISES, Autorizado, rPais);
app.use(POBLACIONES, Autorizado, rPoblacion);
app.use(PROVINCIAS, Autorizado, rProvincia);
app.use(MUSICA, Autorizado, rMusic);
app.use(CLUBS, Autorizado, rClub);
app.use(EVENTS, Autorizado, rEvents);
app.use(USERS, Autorizado, rUsers);
app.use(SLOTS, Autorizado, rSlots);
app.use(ROLES, Autorizado, rRoles);
app.use(COMPANIES, Autorizado, rCompanies);
app.use(DRESSCODE, Autorizado, rDressCode);
app.use(PRODUCTS, Autorizado, rProducts);

if (process.env.NODE_ENV == 'production') {
    // create a rotating write stream
    var accessLogStream = rfs.createStream('access.log', {
        interval: '1d', // rotate daily
        path: path.join(__dirname, 'log')
    })
    app.use(morgan('combined', { stream: accessLogStream }))
} else {
    app.use(morgan('combined'));
}

module.exports = app;