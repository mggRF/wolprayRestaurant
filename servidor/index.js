// Utilizar funcionalidades del Ecmascript 6
'use strict'

// *Cargamos el fichero app.js con la configuración de Express
var app = require('./app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3800;


// CREAR EL SERVIDOR WEB CON NODEJS
app.listen(port, () => {
    console.log("servidor corriendo en http://localhost:3800");
});
