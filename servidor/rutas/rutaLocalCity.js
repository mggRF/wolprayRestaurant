var express = require('express');

var ControladorLocalCity = require('../controladores/ControladorLocalCity');
let localcity = new ControladorLocalCity();

// Llamamos al router
var rutas = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
rutas.get('/', localcity.leerALL);
rutas.get('/select/:id',localcity.leerSelect);
rutas.get('/:id', localcity.leerUno);
rutas.post('/',localcity.updateTable);
rutas.put('/:id', localcity.updateTable);
rutas.delete('/:id', localcity.updateTable);
// Exportamos la configuración
module.exports = rutas;