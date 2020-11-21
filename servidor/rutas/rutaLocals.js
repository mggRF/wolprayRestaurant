var express = require('express');

var ControladorLocals = require('../controladores/ControladorLocals');
let locals = new ControladorLocals();

// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', locals.leerALL);
rutas.get('/select/',locals.leerSelect);
rutas.get('/:id', locals.leerUno);
rutas.post('/',locals.updateTable);
rutas.put('/:id', locals.updateTable);
rutas.delete('/:id', locals.updateTable);
// Exportamos la configuración
module.exports = rutas;