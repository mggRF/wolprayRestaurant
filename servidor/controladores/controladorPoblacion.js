/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/poblacion");
const TABLA = 'cp_poblacion';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE cppob_id = :id`
const SELECT_SELECT = `SELECT id,cppob_nombre as opcion FROM ${TABLA} WHERE cppro_id = :id`

class ControladorPoblacion extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'id',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorPoblacion;