/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Users");
const TABLA = 'users';

const QUERIES = {
    SELECT_SELECT: `SELECT userid  as id,userName  as opcion FROM ${TABLA} WHERE roleid = :id`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE userid  = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE userid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE userid = ?`
}

class ControladorUsers extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'userid',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorUsers;