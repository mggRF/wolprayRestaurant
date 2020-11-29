'use strict'

const express = require('express');
const session = require('express-session');
const ControlTokem = require('../Autentificacion/ControlTokem');
const cTokem = new ControlTokem();
const {TOKEN_SECRET} = require('../Constantes/ConstantesSeguridad');

// Llamamos al router
const rutas = express.Router();

//le añadimos el módulo de sesiones
rutas.use(session({
    secret: TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
}));

// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.put('/login', cTokem.login);
rutas.put('/logout',cTokem.logout)
//rutas.get('/', Home);

// Exportamos la configuración
module.exports = rutas;