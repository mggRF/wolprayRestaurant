var express = require('express');

var ControladorClubs = require('../controladores/ControladorClubs');
let clubs = new ControladorClubs();
var ControladorEvents = require('../controladores/ControladorEvents');
let events = new ControladorEvents();
var ControladorProducts = require('../controladores/ControladorProducts');
let products = new ControladorProducts();
// Llamamos al router
var rutas = express.Router();

// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/:img',clubs.getFoto);                    //no existe imagen
rutas.get('/clubs/:id/:img',clubs.getFoto);
rutas.get('/events/:id/:img',events.getFoto)
rutas.get('/products/:id/:img',products.getFoto)
module.exports = rutas;