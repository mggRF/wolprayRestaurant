
var express = require('express');

var ControladorMusic = require('../controladores/controladorMusic');
let music = new ControladorMusic();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', music.listado);
rutas.get('/select/:id',music.leerSelect)
rutas.get('/:id', music.leerUno);
// Exportamos la configuración
module.exports = rutas;