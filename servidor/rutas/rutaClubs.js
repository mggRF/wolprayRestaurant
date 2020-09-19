

var express = require('express');

var ControladorClubs = require('../controladores/ControladorClubs');
let clubs = new ControladorClubs();
// Llamamos al router
var rutas = express.Router();

// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', clubs.leerALL);
rutas.get('/select/:id',clubs.leerSelect) ////<---¿quien ha hecho esto?
rutas.get('/uploads/:id/:img',clubs.getFoto) ////<---¿quien ha hecho esto?

rutas.get('/citys',clubs.leerSelectCitys); 
rutas.get('/province',clubs.leerSelectProvinces); 
rutas.get('/:id', clubs.leerUno);
rutas.post('/', clubs.updateTable);
rutas.put('/:id', clubs.updateTable);
rutas.delete('/:id', clubs.updateTable);
// Exportamos la configuración
module.exports = rutas;