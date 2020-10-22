'use strict'

var express = require('express');

const ControladorProvincia = require('../controladores/ControladorProvincia');

let provin = new ControladorProvincia();
// Llamamos al router
var rutas = express.Router();

// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', provin.leerALL);
rutas.get('/select/:id',provin.leerSelect)
rutas.get('/select',provin.leerSelect)
rutas.get('/:id', provin.leerUno);
rutas.post('/', provin.updateTable);
rutas.put('/:id', provin.updateTable);
rutas.delete('/:id', provin.updateTable);
// Exportamos la configuración
module.exports = rutas;