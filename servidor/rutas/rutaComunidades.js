'use strict'

var express = require('express');

var ControladorCCAA = require('../controladores/controladorCCAA');
let ccaa = new ControladorCCAA();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', ccaa.listado);
rutas.get('/select/:id',ccaa.leerSelect)
rutas.get('/:id', ccaa.leerUno);
// Exportamos la configuración
module.exports = rutas;