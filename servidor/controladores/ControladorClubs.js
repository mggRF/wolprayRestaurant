/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Club");
const TABLA = 'clubs';
const selectUno  = `select  
                        ${TABLA}.*, 
                        n_dresscode.dressCodeDescription,
                        companies.companyName,
                        c_city.cityName,
                        c_provinces.provinceName,
                        c_state.stateName,
                        c_country.countryName,
                        GROUP_CONCAT(n_music.musicName) as Musica

                        from ${TABLA} 

                            LEFT JOIN club_music ON club_music.clubid = ${TABLA}.clubid
                            LEFT JOIN n_music on club_music.musicid = n_music.musicid
                            JOIN n_dresscode ON n_dresscode.dressCodeId = ${TABLA}.dressCodeid
                            JOIN companies on companies.companyid = ${TABLA}.companyid
                            JOIN c_city ON c_city.cityid = ${TABLA}.cityid
                            JOIN c_provinces ON c_provinces.provinceid = c_city.provinceid
                            JOIN c_state ON c_state.stateid = c_provinces.stateid
                            JOIN c_country on c_country.countryId = c_state.countryid

                        WHERE ${TABLA}.clubid = :id
                        GROUP BY ${TABLA}.clubid;`;

const QUERIES = {
    SELECT_UNO: selectUno,
    SELECT_SELECT: `SELECT clubid as id,clubName as opcion FROM ${TABLA} WHERE cityid = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE clubid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE clubid = ?`
}


class ControladorClubs extends ControladorBase {
   
    constructor(){
        let config = {
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'clubid',
        }
        super(config);
    }

    

}


module.exports = ControladorClubs;