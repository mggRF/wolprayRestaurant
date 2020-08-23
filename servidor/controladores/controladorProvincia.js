/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Poblacion");
const TABLA = 'c_provinces';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE provinceid = :id`
const SELECT_SELECT = `SELECT provinceid as id,provinceName as opcion FROM ${TABLA} WHERE stateid = :id`

class ControladorProvincia extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'provinceid',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorProvincia;