/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/NGrupos");
const { QueriesNGrupos } = require("../Constantes/ConstantesDataBase/queries/QueriesNGrupos");
const TABLA = 'n_grupos';

class ControladorGrupos extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QueriesNGrupos,
            MODELO: MODELO,
            campoId: 'idGrupo',
        }
        super(config);
    }
}


module.exports = ControladorGrupos;