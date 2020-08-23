/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Poblacion");
const TABLA = 'c_city';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE cityid = :id`
const SELECT_SELECT = `SELECT cityid as id,cityName as opcion FROM ${TABLA} WHERE provinceid = :id`

class ControladorPoblacion extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'cityid',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorPoblacion;