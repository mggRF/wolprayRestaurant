/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/paises");
const TABLA = 'c_country';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE countryId = :id`;
const SELECT_SELECT = `SELECT countryId as id,countryName as opcion FROM ${TABLA}`;

class ControladorPais extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'countryId',
        }
        super(config);
    }
    
   
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorPais;