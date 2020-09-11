
'use strict';
/**
 * Controlador para DressCode
 * recibe llamadas para editar, añadir, listar y borrar DressCode
 */
const ControladorBase = require("./ControladorBase");
const MODELO = require("../modelos/DressCode");
const { DressCodeQueries } = require("../queries/QueriesDressCode");
const TABLA = 'n_dresscode';


class DressCodeController extends ControladorBase {
    constructor() {
        let config = {
            TABLA: TABLA,
            QUERIES: DressCodeQueries,
            MODELO: MODELO,
            campoId: 'dressCodeId',
        }
        super(config);
    }
}

module.exports = DressCodeController;