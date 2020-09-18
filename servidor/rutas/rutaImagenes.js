var express = require('express');

var rutas = express.Router();

const FileSystem = require('../modelos/FileSystem');

rutas.get('/uploads/:carpeta/:id/:img',(req, res) =>{
    const carpeta = req.params.carpeta;
    const id = req.params.id;
    const img = req.params.img;

    //const pathFoto

    res.json({
        carpeta,
        id,
        img
    })
});

module.exports = rutas;