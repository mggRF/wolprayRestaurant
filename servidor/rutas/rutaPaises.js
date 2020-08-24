'use strict'

var express = require('express');

var ControladorPais = require('../controladores/ControladorPais');
let cPais = new ControladorPais();
// Llamamos al router
var api = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/', cPais.listado);
api.get('/select/:id',cPais.leerSelect)
api.get('/:id', cPais.leerUno);
api.delete('/:id')
api.put('/:id')
api.post('/')
// Exportamos la configuración
module.exports = api;