/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Poblacion");
const {QueriesProvincia} = require("../queries/QueriesProvincia");
const TABLA = 'c_provinces';



class ControladorProvincia extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QueriesProvincia,
            MODELO:MODELO,
            campoId: 'provinceid',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorProvincia;