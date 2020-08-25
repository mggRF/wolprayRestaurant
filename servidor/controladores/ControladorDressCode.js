
'use strict';
/**
 * Controlador para DressCode
 * recibe llamadas para editar, añadir, listar y borrar DressCode
 */
const ControladorBase = require("./ControladorBase");
const Conexion = require("../servicios/Conexion");
const conect = new Conexion();
const MODELO = require("../modelos/DressCode");
const TABLA = 'n_dresscode';

const QUERIES = {
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE dressCodeId = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE dressCodeId = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE dressCodeId = ?`
}

class DressCodeController extends ControladorBase {
    constructor() {
        let config = {
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'dressCodeId',
        }
        super(config);
    }
}

module.exports = DressCodeController;