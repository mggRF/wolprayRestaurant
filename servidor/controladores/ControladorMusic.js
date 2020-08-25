/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Nmusic");
const TABLA = 'n_music';

const QUERIES = {
    SELECT_SELECT: `SELECT musicid as id,musicName as opcion FROM ${TABLA} WHERE musicid = :id`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE musicid = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE musicid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE musicid = ?`
}

class ControladorMusic extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'musicid',
        }
        super(config);
    }

    

}


module.exports = ControladorMusic;