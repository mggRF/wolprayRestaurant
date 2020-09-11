/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Slot");
const {QueriesSlot} = require("../queries/QueriesSlot");
const TABLA = 'slots';

const QUERIES = {
    SELECT_SELECT: `SELECT slotid  as id,clubid  as opcion FROM ${TABLA} WHERE clubid  = :id`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE slotid  = :id`,
    SELECT_MES_CLUB: `SELECT * FROM ${TABLA} WHERE clubid  = :id AND `,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE slotid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE slotid = ?`
}

class ControladorSlot extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QueriesSlot,
            MODELO:MODELO,
            campoId: 'slotid ',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorSlot;