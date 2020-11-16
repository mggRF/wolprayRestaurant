/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Role");
const {QueriesRole} = require("../Constantes/ConstantesDataBase/queries/QueriesRole");
const TABLA = 'roles';

class ControladorRoles extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QueriesRole,
            MODELO:MODELO,
            campoId: 'roleid  ',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorRoles;