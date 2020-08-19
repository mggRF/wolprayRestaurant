/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/paises");
const TABLA = 'cp_pais';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE country_id = :id`;
const SELECT_SELECT = `SELECT country_id as id,short_name as opcion FROM ${TABLA}`;

class ControladorPais extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'country_id',
        }
        super(config);
    }
    
   
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorPais;