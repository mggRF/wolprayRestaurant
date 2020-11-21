/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Company");
const {QueriesCompany} = require("../Constantes/ConstantesDataBase/queries/QueriesCompany");
const TABLA = 'companies';


class ControladorCompanies extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QueriesCompany,
            MODELO: new MODELO(),
            campoId: 'companyid',
        }
        super(config);
    }
}


module.exports = ControladorCompanies;