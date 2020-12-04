/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/NIva");
const {QueriesIva} = require("../Constantes/ConstantesDataBase/queries/QueriesIva");
const TABLA = 'n_iva';

class ControladorIva extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QueriesIva,
            MODELO:MODELO,
            campoId: 'idIva  ',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorIva;