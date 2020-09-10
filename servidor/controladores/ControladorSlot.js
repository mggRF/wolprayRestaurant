/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Slot");
const {QueriesSlot} = require("../queries/QueriesSlot");
const TABLA = 'slots';



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