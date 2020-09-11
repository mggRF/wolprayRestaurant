'use strict'

var express = require('express');

const ControladorSlot = require('../controladores/ControladorSlot');

let slots = new ControladorSlot();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', slots.listado);
rutas.get('/select/:id',slots.leerSelect)
rutas.get('/mes/:id/:ano/:mes',slots.findByMonth)
rutas.get('/:id', slots.leerUno);
rutas.post('/', slots.updateTable);
rutas.put('/:id', slots.updateTable);
rutas.delete('/:id', slots.updateTable);
// Exportamos la configuración
module.exports = rutas;