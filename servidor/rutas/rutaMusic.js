
var express = require('express');

var ControladorMusic = require('../controladores/ControladorMusic');
let music = new ControladorMusic();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', music.listado);
rutas.get('/select/',music.leerSelect)
rutas.get('/count', music.leerCount);
rutas.get('/:id', music.leerUno);
rutas.post('/', music.updateTable);
rutas.put('/:id', music.updateTable);
rutas.delete('/:id', music.updateTable);
// Exportamos la configuración
module.exports = rutas;