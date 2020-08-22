/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/dressCode");
const TABLA = 'n_dresscode';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE dressCodeId = :id`

class DressCodeController extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            MODELO:MODELO,
            campoId: 'dressCodeId',
        }
        super(config);
    }
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = DressCodeController;