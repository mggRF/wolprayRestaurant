/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/MenuPlatos");
const { QueriesMenuPlatos } = require("../Constantes/ConstantesDataBase/queries/QueriesMenuPlatos");
const TABLA = 'menu_platos';

class ControladorMenuPlatos extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QueriesMenuPlatos,
            MODELO: MODELO,
            campoId: 'idMenu_platos'
        }
        super(config);
    }
}


module.exports = ControladorMenuPlatos;