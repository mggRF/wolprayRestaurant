/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Poblacion");
const TABLA = 'c_provinces';

const QUERIES = {
    SELECT_SELECT: `SELECT provinceid as id,provinceName as opcion FROM ${TABLA} WHERE stateid = :id`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE provinceid = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE dressCodeId = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE dressCodeId = ?`
}

class ControladorProvincia extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'provinceid',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorProvincia;