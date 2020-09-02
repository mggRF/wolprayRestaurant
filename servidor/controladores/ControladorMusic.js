/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Nmusic");
const TABLA = 'n_music';
/**
 * Querys que utiliza el controlador para obtener los distintos resultados
 * SELECT_ALL Obtiene la lista completa (paginada), puede utilizar un criterio de seleccion
 * SELECT_SELECT Obtiene una lista pensada para desplegables. Puede tener seleccion por dependencia
 * SELECT_UNO : Obtiene un solo registros por medio del id
 * INSERT Para insertar nuevos registros
 * UPDATE para actualizar registros
 * DELETE para borrar registros
 * 
 * Particulas
 * :ids sustituido por el id del usuario identificado si no es administrador
 * :id id del registro con el que se desea trabajar
 */

const QUERIES = {
    SELECT_ALL: `SELECT * FROM ${TABLA} WHERE musicid = :ids`,
    SELECT_SELECT: `SELECT musicid as id,musicName as opcion FROM ${TABLA} WHERE musicid = :id`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE musicid = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE musicid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE musicid = ?`
}
 
class ControladorMusic extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'musicid',
        }
        super(config);
    }

    

}


module.exports = ControladorMusic;