'use strict'

var express = require('express');

var ControladorGrupos = require('../controladores/ControladorGrupos');
let grupos = new ControladorGrupos();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', grupos.leerALL);
rutas.get('/select/',grupos.leerSelect)
rutas.get('/:id', grupos.leerUno);
rutas.post('/', grupos.updateTable);
rutas.put('/:id', grupos.updateTable);
rutas.delete('/:id', grupos.updateTable);
// Exportamos la configuración
module.exports = rutas;