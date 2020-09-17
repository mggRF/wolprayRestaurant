const Conexion = require("../servicios/Conexion");

const {
    LPPAGINA
} = require("../Constantes/ConstantesDataBase/ConstantesPaginacion");
const Presenta = require("../servicios/Presenta");
const FyleSystem = require('../modelos/FileSystem');
const { URL, VERSION } = require('../Constantes/ConstantesRutas');

let clubs = 'clubs';
let products = 'products';
let promotions = 'promotions';
let events = 'events';
class ControladorImagenes{


    constructor(){
        let config = {
            CARPETAS: {
                clubs,
                products,
                promotions,
                events
            }
        }
        this.fileSystem = new FyleSystem(config);
        this.getImagebyOption = this.getImagebyOption.bind(this);
    }

    getImagebyOption(req, res){
        const {opcion, id, ALL} = req.params;
        const pathFoto = this.fileSystem.obtenerImagenesAleatorias(opcion, id, ALL);

        console.log(pathFoto);
         res.sendFile(pathFoto);
    }


    /**
     * Enviar datos a puesto //salida API
     * @param {} res : objeto response
     * @param {*} objeto  :datos a enviar o mensaje de error plano
     * @param {*} error  : En caso de error, objeto error
     *                      
     */
    enviaDatos(res, objeto, status = null) {


        if (status == null) {
            res.setHeader('Access-Control-Allow-Methods', 'HEAD,GET,POST,PUT,DELETE,OPTIONS');
            res.setHeader('Allow', 'HEAD,GET,POST,PUT,DELETE,OPTIONS');
            res.json({
                Ok: true,
                Datos: objeto
            });
        } else {
            res.status(status)
                .send({
                    Ok: false,
                    Message: objeto
                });
        }
    }
    
}

module.exports = ControladorImagenes;