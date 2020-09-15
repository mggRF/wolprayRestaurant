'use strict'

var express = require('express');

var ControladorCCAA = require('../controladores/ControladorCCAA');
let ccaa = new ControladorCCAA();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', ccaa.leerALL);
rutas.get('/select/:id',ccaa.leerSelect)
rutas.get('/:id', ccaa.leerUno);
rutas.post('/', ccaa.updateTable);
rutas.put('/:id', ccaa.updateTable);
rutas.delete('/:id', ccaa.updateTable);
// Exportamos la configuración
module.exports = rutas;