

var express = require('express');

var ControladorClubs = require('../controladores/ControladorClubs');
let clubs = new ControladorClubs();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', clubs.listado);
rutas.get('/select/:id',clubs.leerSelect)
rutas.get('/:id', clubs.leerUno);
rutas.post('/', clubs.updateTable);
rutas.put('/:id', clubs.updateTable);
rutas.delete('/:id', clubs.sendDataToTable);
// Exportamos la configuración
module.exports = rutas;