

var express = require('express');

var ControladorClubs = require('../controladores/controladorClubs');
let clubs = new ControladorClubs();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', clubs.listado);
rutas.get('/select/:id',clubs.leerSelect)
rutas.get('/:id', clubs.leerUno);
// Exportamos la configuración
module.exports = rutas;