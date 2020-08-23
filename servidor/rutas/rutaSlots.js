'use strict'

var express = require('express');

const ControladorSlots = require('../controladores/controladorSlot');

let slots = new ControladorSlots();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', slots.listado);
rutas.get('/select/:id',slots.leerSelect)
rutas.get('/:id', slots.leerUno);
// Exportamos la configuración
module.exports = rutas;