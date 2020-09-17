const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

class FileSystem {
    constructor(config) {
        this.config = config;
        this.guardarImagen = this.guardarImagen.bind(this);
        this.getFotoUrl =  this.getFotoUrl.bind(this);
    }


    guardarImagen(file, id, nombreUnico) {
        console.log('El id desde el comienzo de guardar imagen temporal es: ', id)

        return new Promise((resolve, reject) => {

            //Crear carpeta
            const pathFile = this.crearCarpetaFinal(id);
            console.log('El path final es: ',pathFile);


            //Nombre archivo
            const nombreArchivo = this.generarNombreUnico( nombreUnico)

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

    generarNombreUnico(nombreUnico){

        return `${nombreUnico}`;
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



    getFotoUrl(id,img){
        console.log('Imagen => ',img)
        const pathFoto = path.resolve(__dirname,'../../uploads',this.config.CARPETA.CARPETA, id, img);
        
        const exist = fs.existsSync(pathFoto);
        
        if(!exist){
            return path.resolve(__dirname,'../../uploads','nofile.JPG')
        }

        
        return pathFoto;
    }


    obtenerImagenesAleatorias(opcion, id = null, All = null){
        const imagenesAleatorias = this.getImageWithRandom(opcion, id, All);
        

        return imagenesAleatorias;

    }


    obtenerImagenes(id){
        const pathId = path.resolve(__dirname,'../../uploads',this.config.CARPETA.CARPETA, id);
        return fs.readdirSync(pathId);
    }


    
    getImageWithRandom(opcion, id, all){
        let pathImages;
        console.log(opcion, id, all);
        if(id && all){
            pathImages = path.resolve(__dirname,'../../uploads',opcion, id);//Con el all
            
            let exist = fs.existsSync(pathImages);
        
            if(!exist){
                return path.resolve(__dirname,'../../uploads','nofile.JPG')
            }
            
            return fs.readdirSync(pathImages);
        }
        if(id && all === null){
            pathImages = path.resolve(__dirname,'../../uploads',opcion, id);
            
            let exist = fs.existsSync(pathImages);
        
            if(!exist){
                return path.resolve(__dirname,'../../uploads','nofile.JPG')
            }

            let files = fs.readdirSync(pathImages);
            let random = this.getRandomInt(0, files.length);
         
            return fs.readdirSync(files[random]);
        }
        
        let pathCarpet = path.resolve(__dirname,'../../uploads',opcion)
        
        
        let existCarpet = fs.existsSync(pathCarpet);
        
            if(!existCarpet){
                return path.resolve(__dirname,'../../uploads','nofile.JPG')
            }

            let directories = fs.readdirSync(pathCarpet);
            

            let dir = directories[this.getRandomInt(0, directories.length)];
                
            let finalDirs = path.resolve(__dirname,'../../uploads/',opcion, dir);
            
            let existFinalDirs = fs.existsSync(finalDirs);
            
            if(!existFinalDirs){
                return path.resolve(__dirname,'../../uploads','nofile.JPG')
            }

            let finalFiles = path.resolve(finalDirs);

            let existFinalFiles = fs.existsSync(finalFiles);
            
            if(!existFinalFiles){
                return path.resolve(__dirname,'../../uploads','nofile.JPG')
            }

            let imagenes = fs.readdirSync(finalFiles);

        return path.resolve(__dirname,'../../uploads',opcion, dir, imagenes[this.getRandomInt(0, imagenes.length)]);

    }

    getRandomInt(min, max) {
        let ran = Math.floor(Math.random() * (max - min)) + min;
        return ran;
      }
}

module.exports = FileSystem;