const express = require('express');
const FileSystem = require('../servicios/FileSystem')

let FileUpload = express.Router();

FileUpload.use((req, res, next) => {


    if (!req.files) {
        mandarError(res, 'No se ha subido ningún archivo');
    }

    const file = req.files.image;

    if (!file) {
        mandarError(res, 'No se ha subido ningún archivo -image');
    }

    if (!file.mimetype.includes('image')) {
        mandarError(res, 'Debe subir una imagen');
    }

    const ids = req.params.id;
    console.log('El id: ', ids)

    if (ids) {
        console.log('El ids existe, es: ', ids)
        guardarImagenInternaDelClub(file, ids, res, next);
    } else {
        console.log('El ids no existe');
        guardarImagenPrincipal(file, req, res, next);
    }
});

function guardarImagenPrincipal(file, req, res, next) {

    for (let key in req.body) {

        switch (key) {
            case 'clubid':
                guardarImagen(file, req.body[key], 'clubs', req, res, next);
                break;
            case 'productid':
                guardarImagen(file, req.body[key], 'products', req, res, next);
                break;
            case 'promotionid':
                guardarImagen(file, req.body[key], 'promotions', req, res, next);
                break;
            case 'eventid':
                guardarImagen(file, req.body[key], 'events', req, req, res, next);
                break;
            default:
                mandarError(res, 'Ha ocurrido un error inesperado');
                break;
        }
    }
}

async function guardarImagenInternaDelClub(file, id, req, res, next) {
    FileSystem.guardarImagenDelClub(file, id)
        .then(res => {
            next();
        }).catch(err => {
            mandarError(res, err);
        });
}

async function guardarImagen(file, id, pathContent, req, res, next) {
    FileSystem.guardarImagenPrincipal(file, id, pathContent)
        .then(response => {
            req.body.coverUrl = response
            next();
        }).catch(err => {
            mandarError(res, err);
        });

}

function mandarError(res, msg) {
    console.log('Ha ocurrido un error: ', msg);
    return res.status(400).json({
        ok: false,
        Message: msg
    });
}



module.exports = FileUpload;