

var express = require('express');

var ControladorEvents = require('../controladores/controladorEvents');
let events = new ControladorEvents();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', events.listado);
rutas.get('/select/:id',events.leerSelect)
rutas.get('/:id', events.leerUno);
// Exportamos la configuración
module.exports = rutas;