/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");



const MODELO = require("../modelos/Comunidades");
const { QueriesCCAA } = require("../Constantes/ConstantesDataBase/queries/QueriesCCA");
const TABLA = 'c_state';

class ControladorCCAA extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QueriesCCAA,
            MODELO: MODELO,
            campoId: 'stateid',
        }
        super(config);
    }

}


module.exports = ControladorCCAA;