/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/comunidades");
const TABLA = 'cp_comunidades';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE cpcoa_id = :id`;
const SELECT_SELECT = `SELECT cpcoa_id as id,cpcoa_nombre as opcion FROM ${TABLA} WHERE cpcoa_pais = :id`

class ControladorCCAA extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'cpcoa_id',
        }
        super(config);
    }

    

}


module.exports = ControladorCCAA;