

var express = require('express');

var ControladorUsers = require('../controladores/controladorUsers');
let users = new ControladorUsers();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', users.listado);
rutas.get('/select/:id',users.leerSelect)
rutas.get('/:id', users.leerUno);
// Exportamos la configuración
module.exports = rutas;