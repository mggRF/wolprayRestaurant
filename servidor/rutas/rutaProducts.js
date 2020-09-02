var express = require('express');

var ControladorProducts = require('../controladores/ControladorProducts');
let products = new ControladorProducts();

// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', products.listado);
rutas.get('/select/:id',products.leerSelect)
rutas.get('/:id', products.leerUno);
rutas.post('/',products.updateTable);
rutas.put('/:id', products.updateTable);
rutas.delete('/:id', products.updateTable);
// Exportamos la configuración
module.exports = rutas;