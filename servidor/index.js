// Utilizar funcionalidades del Ecmascript 6
'use strict'
const {FS_CERTIFICADO, FS_KEY } = require ('./Constantes/ConstantesSeguridad.js');

const express = require('express');
const https = require('https');
const fs = require('fs');
// *Cargamos el fichero app.js con la configuración de Express
const app = require('./app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
const port = 3800;

/**Seguridad */
console.log(FS_KEY, '><',FS_CERTIFICADO )
var key = fs.readFileSync(FS_KEY);
var cert = fs.readFileSync(FS_CERTIFICADO);
var options = {
  key: key,
  cert: cert
};

// CREAR EL SERVIDOR WEB CON NODEJS
// app.listen(port, () => {
//     console.log("servidor corriendo en http://localhost:3800");
// });
var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});
