
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
    SELECT_SELECT: `SELECT * FROM ${TABLA} WHERE dressCodeId = :id`,
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


    updateTable(req, res) {
        //route: Route { path: '/', stack: [ [Layer] ], methods: { post: true } }
        const method = req.route.stack[0].method;
        const id = req.params.id;
        const body = req.body;

        switch (method.toLowerCase()) {
            case 'post':
                DressCodeController.getValues([body], QUERIES.INSERT, res);
                break;
            case 'put':
                DressCodeController.getValues([body, id],QUERIES.UPDATE, res);
                break;
            case 'delete':
                DressCodeController.getValues([id], QUERIES.DELETE, res);
                break;

        }
    }


    static getValues(data, sql, res) {
        conect.modifyTable(sql, data)
            .then(value => {
                ControladorBase.enviaDatos(res, value);
            }).catch(err => ControladorBase.enviaDatos(res, 'Ha ocurrido un error al tratar de modificar la tabla', err));
    }
}

module.exports = DressCodeController;