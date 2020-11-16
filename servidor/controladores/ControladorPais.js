/**
 * Controlador para comunidades autonomas
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Paises");
const {QueriesPais} = require("../Constantes/ConstantesDataBase/queries/QueriesPais");
const TABLA = 'c_country';


class ControladorPais extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QueriesPais,
            MODELO:MODELO,
            campoId: 'countryId',
        }
        super(config);
    }
    
   
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorPais;