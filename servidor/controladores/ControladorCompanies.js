/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Company");
const TABLA = 'companies';
const selectUo = `select 
                    ${TABLA}.*,
                    users.userName, 
                    c_city.cityName,
                    c_provinces.provinceid,
                    c_provinces.provinceName,
                    c_state.stateid,
                    c_state.stateName,
                    c_country.countryId,
                    c_country.countryName

                    from ${TABLA} 

                        JOIN users ON users.userid = ${TABLA}.userid 
                        JOIN c_city ON c_city.cityid = ${TABLA}.cityid 
                        JOIN c_provinces on c_provinces.provinceid = c_city.provinceid
                        JOIN c_state ON c_state.stateid = c_provinces.stateid
                        JOIN c_country on c_country.countryId = c_state.countryid
                    WHERE ${TABLA}.companyid = :id`

const QUERIES = {
    SELECT_UNO: selectUo,
    SELECT_SELECT: `SELECT companyid  as id,companyName as opcion FROM ${TABLA} WHERE countryid  = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE companyid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE companyid = ?`
}


class ControladorCompanies extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'companyid',
        }
        super(config);
    }

    

}


module.exports = ControladorCompanies;