/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");
const Presenta = require('../servicios/Presenta');
const MODELO = require("../modelos/Users");
const {QueriesUser} = require("../Constantes/ConstantesDataBase/queries/QueriesUser");
const TABLA = 'users';



class ControladorUsers extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QueriesUser,
            MODELO:MODELO,
            campoId: 'userid',
        }
        super(config);
        this.userByEmail = this.userByEmail.bind(this);
    }
    
    async userByEmail(email){
        
        const sql = QueriesUser.SELECT_BY_MAIL.replace(':email',email);
        Presenta.log(sql.replace(/:TABLA/gi,TABLA))
        
          
       return await this.connect.leerSql(sql.replace(/:TABLA/gi,TABLA));
        
    }

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorUsers;