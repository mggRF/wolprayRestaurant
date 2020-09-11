/**
 * Controlador para products
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Product");
const { QuerieProduct } = require("../queries/QueriesProduct");
const TABLA = 'products';
const CARPETA = 'products';
const CAMPO = 'imageUrl';



class ControladorProducts extends ControladorBase {
   
    constructor(){
        let config = {
            CARPETA: {
                CARPETA,
                CAMPO,
                nombreFoto: 'principal.jpg'
            },
            TABLA: TABLA,
            QUERIES: QuerieProduct,
            MODELO: MODELO,
            campoId: 'productid',
        }
        super(config);
    }

    

}


module.exports = ControladorProducts;