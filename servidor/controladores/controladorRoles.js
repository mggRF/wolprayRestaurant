/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/role");
const TABLA = 'roles';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE roleid   = :id`
const SELECT_SELECT = `SELECT roleid   as id,roleName  as opcion FROM ${TABLA} WHERE roleid   = :id`

class ControladorRoles extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'roleid  ',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorRoles;