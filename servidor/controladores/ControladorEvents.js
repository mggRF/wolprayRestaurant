/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/events");
const TABLA = 'events';

const QUERIES = {
    SELECT_SELECT: `SELECT * FROM ${TABLA} WHERE eventid   = :id`,
    SELECT_UNO: `SELECT eventid   as id,eventName  as opcion FROM ${TABLA} WHERE eventid  = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE eventid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE eventid = ?`
}
class ControladorEvents extends ControladorBase {
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'eventid',
        }
        super(config);
    }
    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorEvents;