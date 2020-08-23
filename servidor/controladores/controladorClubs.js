/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/club");
const TABLA = 'clubs';
const SELECT_UNO = `SELECT * FROM ${TABLA} WHERE clubid  = :id`;
const SELECT_SELECT = `SELECT clubid as id,clubName as opcion FROM ${TABLA} WHERE clubid = :id`;

class ControladorClubs extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA:TABLA,
            SELECT_UNO : SELECT_UNO,
            SELECT_SELECT: SELECT_SELECT,
            MODELO:MODELO,
            campoId: 'clubid',
        }
        super(config);
    }

    

}


module.exports = ControladorClubs;