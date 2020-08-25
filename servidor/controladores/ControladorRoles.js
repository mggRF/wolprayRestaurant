/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/role");
const TABLA = 'roles';

const QUERIES = {
    SELECT_SELECT: `SELECT roleid   as id,roleName  as opcion FROM ${TABLA} WHERE roleid   = :id`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE roleid   = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE roleid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE roleid = ?`
}

class ControladorRoles extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'roleid  ',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorRoles;