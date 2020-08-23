/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/users");
const TABLA = 'users';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE userid  = :id`
const SELECT_SELECT = `SELECT userid  as id,userName  as opcion FROM ${TABLA} WHERE userid = :id`

class ControladorUsers extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'userid',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorUsers;