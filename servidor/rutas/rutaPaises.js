'use strict'

var express = require('express');

var ControladorPais = require('../controladores/ControladorPais');
let cPais = new ControladorPais();
// Llamamos al router
var api = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/', cPais.leerALL);
api.get('/select/',cPais.leerSelect)
api.get('/:id', cPais.leerUno);

// Exportamos la configuración
module.exports = api;