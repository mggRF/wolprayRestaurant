'use strict'

var express = require('express');

var ControladorPoblacion = require('../controladores/ControladorPoblacion');
let pobla = new ControladorPoblacion();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', pobla.leerALL);
rutas.get('/select/:id',pobla.leerSelect)
rutas.get('/:id', pobla.leerUno);

// Exportamos la configuración
module.exports = rutas;