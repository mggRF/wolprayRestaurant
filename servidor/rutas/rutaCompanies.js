

var express = require('express');

var ControladorCompanies = require('../controladores/ControladorCompanies');
let companies = new ControladorCompanies();
// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', companies.listado);
rutas.get('/select/:id',companies.leerSelect)
rutas.get('/:id', companies.leerUno);
// Exportamos la configuración
module.exports = rutas;