/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Poblacion");
const {QueriesPoblacion} = require("../Constantes/ConstantesDataBase/queries/QueriesPoblacion");
const TABLA = 'c_city';



class ControladorPoblacion extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QueriesPoblacion,
            MODELO:MODELO,
            campoId: 'cityid',
        }
        super(config);
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorPoblacion;