const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

class FileSystem {
    constructor(config) {
        this.config = config;
        this.guardarImagenTemporal = this.guardarImagenTemporal.bind(this);
    }


    guardarImagenTemporal(file, id) {
        console.log('El id desde el comienzo de guardar imagen temporal es: ', id)

        return new Promise((resolve, reject) => {

            //Crear carpeta
            const pathFile = this.crearCarpetaFinal(id);
            console.log('El path final es: ',pathFile);


            //Nombre archivo
            const nombreArchivo = this.config.CARPETA.nombreFoto;

            console.log('El nombre original del archivo es: ', file.name);
            console.log('El nombre del achivo será: ', nombreArchivo);

            //Mover el archivo del temp a nuestra carpeta
            file.mv(`${pathFile}/${nombreArchivo}`, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Se ha añadido correctamente la imagen');
                }
            });

        });

    }

    crearCarpetaFinal(id) {

        //poniendo la ruta correcta
        const rutaRaiz = path.resolve(__dirname, '../../uploads/', this.config.CARPETA.CARPETA);
        
        const rutaFinal = rutaRaiz + '/' + id;
        console.log('La ruta final será: ',rutaFinal);

    

        if (!fs.existsSync(rutaRaiz)) {
            fs.mkdirSync(rutaRaiz);
        }


        if (!fs.existsSync(rutaFinal)) {
            fs.mkdirSync(rutaFinal);
        }


        return rutaFinal;
    }


    imagenesDeTempHaciaPrincipal(id){

        //TODO ?
        const rutaTemp = path.resolve(__dirname, '../../uploads/', this.config.CARPETA.CARPETA, id, 'temp');
        const rutaImages = path.resolve(__dirname, '../../uploads/', this.config.CARPETA.CARPETA, id, 'images');

        if(!fs.existsSync(rutaTemp)){
            return [];
        }
        
        if(!fs.existsSync(rutaImages)){
            fs.mkdirSync(rutaImages)
        }

        const imagenesTemp = this.obtenerImagenesEnTemp(id, rutaTemp);

        imagenesTemp.forEach(imagen => {
            fs.renameSync(`${rutaTemp}/${imagen}`, `${rutaImages}/${imagen}`);
        });

        return imagenesTemp;
    }

    obtenerImagenesEnTemp(pathTemp){
        return fs.readdirSync(pathTemp) || [];
    }


    eliminarCarpetaDeImagenes(id){
        const rutaImages = path.resolve(__dirname, '../../uploads/', this.config.CARPETA.CARPETA, id);

        if(fs.existsSync(rutaImages)){
            fs.rmdirSync(rutaImages, {recursive: true});
            return true;
        }else{
            return false;
        }
    }
}

module.exports = FileSystem;