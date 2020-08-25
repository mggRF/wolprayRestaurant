/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/club");
const TABLA = 'clubs';

const QUERIES = {
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE clubid  = :id`,
    SELECT_SELECT: `SELECT clubid as id,clubName as opcion FROM ${TABLA} WHERE clubid = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE clubid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE clubid = ?`
}


class ControladorClubs extends ControladorBase {
    
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'clubid',
        }
        super(config);
    }

    

}


module.exports = ControladorClubs;