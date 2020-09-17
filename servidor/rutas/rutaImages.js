var express = require('express');

var ControladorImagenes = require('../controladores/ControladorImagenes');

let images = new ControladorImagenes();


var rutas = express.Router();


rutas.get('/:opcion', images.getImagebyOption);
rutas.get('/:opcion/:id', images.getImagebyOption);
rutas.get('/:opcion/:id/:ALL', images.getImagebyOption);

module.exports = rutas;