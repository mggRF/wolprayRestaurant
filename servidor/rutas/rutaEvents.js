

var express = require('express');

var ControladorEvents = require('../controladores/ControladorEvents');
let events = new ControladorEvents();

// Llamamos al router
var rutas = express.Router();

// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', events.leerALL);
rutas.get('/select/:id',events.leerSelect)
rutas.get('/:id', events.leerUno);
rutas.post('/', events.updateTable);
rutas.put('/:id', events.updateTable);
rutas.delete('/:id', events.updateTable);
// Exportamos la configuración
module.exports = rutas;