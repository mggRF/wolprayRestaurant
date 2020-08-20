/**
 * aplicacion express
 * 
 */

'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const { COMUNIDADES, PAISES, POBLACIONES , PROVINCIAS} = require('./Constantes/ConstantesRutas');


const app = express();


// Importamos las rutas
const rGlobal = require('./rutas/rutaGlobal'); 
const rComunidades = require('./rutas/rutaComunidades'); 
const rPais = require('./rutas/rutaPaises'); 
const rPoblacion = require('./rutas/rutaPoblacion'); 
const rProvincia = require('./rutas/rutaProvincias'); 
const Autorizado = require('./Autentificacion/middelAut');


//cargar middlewares
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
console.log(COMUNIDADES);
// Cargamos las rutas
app.use('/', rGlobal);
// app.use(COMUNIDADES,Autorizado, rComunidades);
// app.use(PAISES,Autorizado, rPais);
// app.use(POBLACIONES,Autorizado, rPoblacion);
app.use(COMUNIDADES, rComunidades);
app.use(PAISES, rPais);
app.use(POBLACIONES, rPoblacion);
app.use(PROVINCIAS,Autorizado, rProvincia);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;