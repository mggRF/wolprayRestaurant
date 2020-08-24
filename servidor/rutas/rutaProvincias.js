'use strict'

var express = require('express');

const ControladorProvincia = require('../controladores/ControladorProvincia');

let provin = new ControladorProvincia();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', provin.listado);
rutas.get('/select/:id',provin.leerSelect)
rutas.get('/:id', provin.leerUno);
// Exportamos la configuración
module.exports = rutas;