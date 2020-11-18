/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/NLocalcity");
const { QueriesNLocalcity } = require("../Constantes/ConstantesDataBase/queries/QueriesNLocalcity");
const TABLA = 'n_localcity';

class ControladorLocalCity extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QueriesNLocalcity,
            MODELO: MODELO,
            campoId: 'idLocalCity',
        }
        super(config);
    }
}


module.exports = ControladorLocalCity;