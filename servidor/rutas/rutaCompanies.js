

var express = require('express');

var ControladorCompanies = require('../controladores/ControladorCompanies');
let companies = new ControladorCompanies();
// Llamamos al router
var rutas = express.Router();

// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', companies.leerALL);
rutas.get('/select/',companies.leerSelect)
rutas.get('/:id', companies.leerUno);
rutas.post('/', companies.updateTable);
rutas.put('/:id', companies.updateTable);
rutas.delete('/:id', companies.updateTable);
// Exportamos la configuración
module.exports = rutas;