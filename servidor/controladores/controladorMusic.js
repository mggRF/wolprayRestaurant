/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/nmusic");
const TABLA = 'n_music';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE musicid = :id`;
const SELECT_SELECT = `SELECT musicid as id,musicName as opcion FROM ${TABLA} WHERE musicid = :id`;

class ControladorMusic extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'musicid',
        }
        super(config);
    }

    

}


module.exports = ControladorMusic;