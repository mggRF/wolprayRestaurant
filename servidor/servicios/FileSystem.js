
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');


const FileSystem = {
    guardarImagenPrincipal: guardarImagenPrincipal,
    guardarImagenDelClub: guardarImagenDelClub,
    imagenesDeTempHaciaLaRutaFinal: imagenesDeTempHaciaLaRutaFinal
}

function guardarImagenPrincipal(file, id, contentPath) {


    return new Promise((resolve, reject) => {

        //Crear carpetas
        const pathFinal = crearCarpetaDeContenido(id, contentPath);

        //Nombre del archivo
        const nombreArr = file.name.split('.');
        const extension = nombreArr[nombreArr.length - 1];
        const fileName = `${id}.${extension}`;

        //Mover a carpeta
        file.mv(`${pathFinal}/${fileName}`, err => {
            if (err) {
                reject(err);
            } else {
                resolve(`${pathFinal}/${fileName}`);
            }
        });

    });
}


function guardarImagenDelClub(file, id) {
    return new Promise((resolve, reject) => {
        const pathFinal = obtenerPath(id);

        if (fs.existsSync(pathFinal)) {
            const fileName = generarNombre(file.name);
            file.mv(`${pathFinal}/${fileName}`, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(fileName);
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
    return path.resolve(__dirname, '../interno/', '/clubs/'+id + '/fotos');
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

    return finalPath;
}

function imagenesDeTempHaciaLaRutaFinal(id){
    const pathContent = path.resolve(__dirname, '../interno/','/clubs' );
    const pathTemp = pathContent + '/' + id+'/temp';
    const finalPath = pathContent + '/' + id+'/fotos';

    if(fs.existsSync(pathTemp)){
        return [];
    }

    if(fs.existsSync(finalPath)){
        fs.mkdirSync(finalPath)
    }

    const imagenesTemp = obtenerImagenesEnTemp(id, pathTemp);

    imagenesTemp.forEach(imagen => {
        fs.renameSync(`${pathTemp}/${imagen}`,`${finalPath}/${imagen}` );
    });

    return imagenesTemp;
    
}

function obtenerImagenesEnTemp(id, contentPath){
    return fs.readdirSync(contentPath) || [];
}

module.exports = FileSystem;