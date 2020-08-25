/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/company");
const TABLA = 'companies';
 
const QUERIES = {
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE companyid   = :id`,
    SELECT_SELECT: `SELECT companyid  as id,companyName as opcion FROM ${TABLA} WHERE companyid  = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE companyid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE companyid = ?`
}


class ControladorCompanies extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'companyid',
        }
        super(config);
    }

    

}


module.exports = ControladorCompanies;