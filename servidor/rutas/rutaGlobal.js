'use strict'

const express = require('express');

const ControlTokem = require('../Autentificacion/ControlTokem');
const cTokem = new ControlTokem();
const Home = require('../paginas/home');

// Llamamos al router
const rutas = express.Router();

// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/login', cTokem.login);
rutas.get('/logout',cTokem.logout)
//rutas.get('/', Home);

// Exportamos la configuración
module.exports = rutas;