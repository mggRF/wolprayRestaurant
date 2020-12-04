'use strict'

var express = require('express');

const ControladorIva = require('../controladores/ControladorIva');

let iva = new ControladorIva();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', iva.leerALL);
rutas.get('/select/:id',iva.leerSelect)
rutas.get('/:id', iva.leerUno);
rutas.post('/', iva.updateTable);
rutas.put('/:id', iva.updateTable);
rutas.delete('/:id', iva.updateTable);
// Exportamos la configuración
module.exports = rutas;