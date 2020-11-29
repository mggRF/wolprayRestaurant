/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Menu");
const { QueriesMenu } = require("../Constantes/ConstantesDataBase/queries/QueriesMenu");
const TABLA = 'menu';

class ControladorMenu extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QueriesMenu,
            MODELO: MODELO,
            campoId: 'idmenu',
        }
        super(config);
    }
}


module.exports = ControladorMenu;