

var express = require('express');

var ControladorEvents = require('../controladores/ControladorEvents');
let events = new ControladorEvents();

// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', events.leerALL);
rutas.get('/select/:id',events.leerSelect)
rutas.get('/uploads/:id/:img',events.getFoto)
rutas.get('/:id', events.leerUno);
rutas.post('/', events.updateTable);
rutas.put('/:id', events.updateTable);
rutas.delete('/:id', events.updateTable);
// Exportamos la configuración
module.exports = rutas;