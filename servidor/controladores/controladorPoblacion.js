/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Poblacion");
const TABLA = 'c_city';

const QUERIES = {
    SELECT_SELECT: `SELECT cityid as id,cityName as opcion FROM ${TABLA} WHERE cityid = :id`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE cityid = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE cityid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE cityid = ?`
}

class ControladorPoblacion extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'cityid',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorPoblacion;