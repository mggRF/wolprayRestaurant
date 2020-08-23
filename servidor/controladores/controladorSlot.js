/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/slot");
const TABLA = 'slots';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE slotid  = :id`
const SELECT_SELECT = `SELECT slotid  as id,clubid  as opcion FROM ${TABLA} WHERE slotid  = :id`

class ControladorProvincia extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'slotid ',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorProvincia;