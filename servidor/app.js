/**
 * aplicacion express
 * 
 */

'use strict'

const express = require('express');
const bodyParser = require('body-parser');



const app = express();


// Importamos las rutas
const rGlobal = require('./rutas/rutaGlobal'); 
const rComunidades = require('./rutas/rutaComunidades'); 
const rPais = require('./rutas/rutaPaises'); 
const rPoblacion = require('./rutas/rutaPoblacion'); 
const Autorizado = require('./Autentificacion/middelAut');

//cargar middlewares
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cargamos las rutas
app.use('/', rGlobal);
app.use('/api/comunidades',Autorizado, rComunidades);
app.use('/api/paises',Autorizado, rPais);
app.use('/api/poblacion',Autorizado, rPoblacion);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;