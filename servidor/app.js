/**
 * aplicacion express
 * 
 */

'use strict'

const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const { COMUNIDADES, PAISES, POBLACIONES , PROVINCIAS,MUSICA,CLUBS} = require('./Constantes/ConstantesRutas');
=======
const { COMUNIDADES, PAISES, POBLACIONES , PROVINCIAS, DRESSCODE} = require('./Constantes/ConstantesRutas');
>>>>>>> f26884a0fc93cdad3d9f9054cd7073540911aabc


const app = express();
app.use(cors());

// Importamos las rutas
const rGlobal = require('./rutas/rutaGlobal'); 
const rComunidades = require('./rutas/rutaComunidades'); 
const rPais = require('./rutas/rutaPaises'); 
const rPoblacion = require('./rutas/rutaPoblacion'); 
<<<<<<< HEAD
const rProvincia = require('./rutas/rutaProvincias');
const rMusic = require('./rutas/rutaMusic'); 
const rClub = require('./rutas/rutaClubs');

=======
const rProvincia = require('./rutas/rutaProvincias'); 
const rDressCode = require('./rutas/dressCodeRoutes'); 
>>>>>>> f26884a0fc93cdad3d9f9054cd7073540911aabc
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
<<<<<<< HEAD
app.use(MUSICA,Autorizado, rMusic);
app.use(CLUBS,Autorizado, rClub);
=======
app.use(DRESSCODE,Autorizado, rDressCode);
>>>>>>> f26884a0fc93cdad3d9f9054cd7073540911aabc


module.exports = app;