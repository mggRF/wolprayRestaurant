/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");



const MODELO = require("../modelos/Comunidades");
const TABLA = 'c_state';

SELECT_UNO = `SELECT 
                ${TABLA}.*,
                c_country.countryName

                from ${TABLA}

                LEFT JOIN c_country ON c_country.countryId = ${TABLA}.countryid
                
                WHERE ${TABLA}.stateid = :id`;
const QUERIES = {
    SELECT_UNO: SELECT_UNO,
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