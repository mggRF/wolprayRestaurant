/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Locals");
const {QueriesLocals} = require("../Constantes/ConstantesDataBase/queries/QueriesLocals");
const TABLA = 'locals';

class ControladorLocals extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QueriesLocals,
            MODELO: MODELO,
            campoId: 'idLocal',
        }
        super(config);
    }
}


module.exports = ControladorLocals;