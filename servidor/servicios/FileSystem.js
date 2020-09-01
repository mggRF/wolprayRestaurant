
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');


const FileSystem = {
    guardarImagenTemporal: guardarImagenTemporal,
    guardarImagenDelClub: guardarImagenDelClub
}

function guardarImagenTemporal(file, id, contentPath) {


    return new Promise((resolve, reject) => {

        //Crear carpetas
        const pathFinal = crearCarpetaDeContenido(id, contentPath);

        //Nombre del archivo
        const nombreArr = file.name.split('.');
        const extension = nombreArr[nombreArr.length - 1];
        const fileName = `principal.${extension}`;

        //Mover a carpeta
        file.mv(`${pathFinal}/${fileName}`, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });

    });
}


function guardarImagenDelClub(file, id,) {
    return new Promise((resolve, reject) => {
        const pathFinal = obtenerPath(id, contentPath);

        if (fs.existsSync(path)) {
            const fileName = generarNombre(file.name);
            file.mv(`${pathFinal}/${fileName}`, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        } else {
            console.log('La carpeta no existe');
            reject('La carpeta no existe');
        }

    });
}

function generarNombre(nombreOriginal) {
    const nombreArr = nombreOriginal.split('.');
    const extension = nombreArr[nombreArr.length - 1];

    const idUnico = uniqid();

    return `${idUnico}.${extension}`;
}

function obtenerPath(id) {
    const finalPathClub = path.resolve(__dirname, '../interno/', id + '/fotos');
}


function crearCarpetaDeContenido(id, contentPath) {

    const pathContent = path.resolve(__dirname, '../interno/', contentPath);
    const finalPath = pathContent + '/' + id;
    const pathTemp = finalPath + '/temp';
    const otrasFotos = finalPath + '/fotos';

    const exist = fs.existsSync(pathContent);

    if (!exist) {
        fs.mkdirSync(pathContent);
        fs.mkdirSync(finalPath);
        fs.mkdirSync(pathTemp);

        if (contentPath === 'clubs') {
            fs.mkdirSync(otrasFotos);//Creo la carpeta de fotos del club
        }
    }

    return pathTemp;
}

module.exports = FileSystem;