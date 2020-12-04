'use strict'

var express = require('express');

var ControladorMenuPlatos = require('../controladores/ControladorMenuPlatos');
let menuPlatos = new ControladorMenuPlatos();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', menuPlatos.leerALL);
rutas.get('/select/:id',menuPlatos.leerSelect)
rutas.get('/:id', menuPlatos.leerUno);
rutas.get('/BYMENU/:id', menuPlatos.leerALL);
rutas.post('/', menuPlatos.updateTable);
rutas.put('/:id', menuPlatos.updateTable);
rutas.delete('/:id', menuPlatos.updateTable);
// Exportamos la configuración
module.exports = rutas;