/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Users");
const TABLA = 'users';
const SELECT_BY_MAIL = `SELECT * FROM ${TABLA} WHERE mail  = :email`

const QUERIES = {
    SELECT_SELECT: `SELECT userid  as id,userName  as opcion FROM ${TABLA} WHERE roleid = :id`,
    SELECT_UNO: `SELECT * FROM ${TABLA} WHERE userid  = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE userid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE userid = ?`
}

class ControladorUsers extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'userid',
        }
        super(config);
        this.userByEmail = this.userByEmail.bind(this);
    }
    
    async userByEmail(email){
        const sql = SELECT_BY_MAIL.replace(':email',email);
        console.log(sql)
        
          
       return await this.connect.leerSql(sql);
        
    }

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorUsers;