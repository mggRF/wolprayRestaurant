'use strict'

var express = require('express');

var DressCodeController = require('../controladores/ControladorDressCode');
let dressCode = new DressCodeController();
// Llamamos al router
var rutas = express.Router();

// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', dressCode.leerALL);
rutas.get('/select/',dressCode.leerSelect)
rutas.get('/:id', dressCode.leerUno);
rutas.post('/', dressCode.updateTable);
rutas.put('/:id', dressCode.updateTable);
rutas.delete('/:id', dressCode.updateTable);
// Exportamos la configuración
module.exports = rutas;