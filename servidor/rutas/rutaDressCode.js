'use strict'

var express = require('express');

var DressCodeController = require('../controladores/ControladorDressCode');
let dressCode = new DressCodeController();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', dressCode.listado);
rutas.get('/select/:id',dressCode.leerSelect)
rutas.get('/:id', dressCode.leerUno);
rutas.post('/', dressCode.updateTable);
rutas.put('/:id', dressCode.updateTable);
rutas.delete('/:id', dressCode.updateTable);
// Exportamos la configuración
module.exports = rutas;