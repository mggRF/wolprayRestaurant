'use strict'

var express = require('express');

var ControladorMenu = require('../controladores/ControladorMenu');
let menu = new ControladorMenu();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', menu.leerALL);
rutas.get('/select/:id',menu.leerSelect)
rutas.get('/:id', menu.leerUno);
rutas.post('/', menu.updateTable);
rutas.put('/:id', menu.updateTable);
rutas.delete('/:id', menu.updateTable);
// Exportamos la configuración
module.exports = rutas;