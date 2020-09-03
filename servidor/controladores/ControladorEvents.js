/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Events");
const TABLA = 'events';
const CARPETA = 'products';
const CAMPO = 'event_imagePral';
const QUERIES = {
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE eventid   = :id`,
    SELECT_SELECT: `SELECT eventid   as id,eventName  as opcion FROM ${TABLA} WHERE clubid  = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE eventid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE eventid = ?`
}
class ControladorEvents extends ControladorBase {
    constructor(){
        let config = {
            CARPETA: {
                CARPETA:CARPETA,
                CAMPO:CAMPO
            },
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'eventid',
            carpetaImagenes:'events'
        }
        super(config);
    }
    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorEvents;