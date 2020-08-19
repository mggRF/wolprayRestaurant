/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/comunidades");
const TABLA = 'c_state';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE stateid = :id`;
const SELECT_SELECT = `SELECT stateid as id,stateName as opcion FROM ${TABLA} WHERE countryid = :id`

class ControladorCCAA extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'stateid',
        }
        super(config);
    }

    

}


module.exports = ControladorCCAA;