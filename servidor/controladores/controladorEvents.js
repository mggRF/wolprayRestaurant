/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/events");
const TABLA = 'events';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE eventid   = :id`
const SELECT_SELECT = `SELECT eventid   as id,eventName  as opcion FROM ${TABLA} WHERE eventid  = :id`

class ControladorEvents extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'eventid ',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorEvents;