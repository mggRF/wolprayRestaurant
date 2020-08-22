/**
 * aplicacion express
 * 
 */

'use strict'

const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const { COMUNIDADES, PAISES, POBLACIONES , PROVINCIAS, DRESSCODE} = require('./Constantes/ConstantesRutas');


const app = express();
app.use(cors());

// Importamos las rutas
const rGlobal = require('./rutas/rutaGlobal'); 
const rComunidades = require('./rutas/rutaComunidades'); 
const rPais = require('./rutas/rutaPaises'); 
const rPoblacion = require('./rutas/rutaPoblacion'); 
const rProvincia = require('./rutas/rutaProvincias'); 
const rDressCode = require('./rutas/dressCodeRoutes'); 
const Autorizado = require('./Autentificacion/middelAut');


//cargar middlewares
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cargamos las rutas
app.use('/', rGlobal);
app.use(COMUNIDADES,Autorizado, rComunidades);
app.use(PAISES,Autorizado, rPais);
app.use(POBLACIONES,Autorizado, rPoblacion);
app.use(PROVINCIAS,Autorizado, rProvincia);
app.use(DRESSCODE,Autorizado, rDressCode);


module.exports = app;