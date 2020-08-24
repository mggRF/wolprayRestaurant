
var express = require('express');

var ControladorRoles = require('../controladores/ControladorRoles');
let roles = new ControladorRoles();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', roles.listado);
rutas.get('/select/:id',roles.leerSelect)
rutas.get('/:id', roles.leerUno);
rutas.post('/', roles.updateTable);
rutas.put('/:id', roles.updateTable);
rutas.delete('/:id', roles.updateTable);
// Exportamos la configuración
module.exports = rutas;