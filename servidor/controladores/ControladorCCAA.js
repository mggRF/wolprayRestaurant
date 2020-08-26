/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Comunidades");
const TABLA = 'c_state';
const QUERIES = {
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE stateid = :id`,
    SELECT_SELECT: `SELECT stateid as id,stateName as opcion FROM ${TABLA} WHERE countryid = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE stateid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE stateid = ?`
}


class ControladorCCAA extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'stateid',
        }
        super(config);
    }

}


module.exports = ControladorCCAA;