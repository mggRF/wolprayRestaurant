/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Paises");
const TABLA = 'c_country';

const QUERIES = {
    SELECT_SELECT: `SELECT countryId as id,countryName as opcion FROM ${TABLA}`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE countryId = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE countryId = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE countryId = ?`
}

class ControladorPais extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'countryId',
        }
        super(config);
    }
    
   
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorPais;