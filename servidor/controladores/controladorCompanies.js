/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/company");
const TABLA = 'companies';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE companyid   = :id`;
const SELECT_SELECT = `SELECT companyid  as id,companyName as opcion FROM ${TABLA} WHERE companyid  = :id`;

class ControladorCompanies extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'companyid',
        }
        super(config);
    }

    

}


module.exports = ControladorCompanies;