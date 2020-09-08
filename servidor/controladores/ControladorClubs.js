/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Club");
const TABLA = 'clubs';
const CARPETA = 'clubs';
const CAMPO = 'coverUrl';
const selectUno = `select  
                        ${TABLA}.*, 
                        n_dresscode.dressCodeId,
                        n_dresscode.dressCodeDescription,
                        companies.companyid,
                        companies.companyName,
                        c_city.cityid,
                        c_city.cityName,
                        c_provinces.provinceid,
                        c_provinces.provinceName,
                        c_state.stateid,
                        c_state.stateName,
                        c_country.countryId,
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

    constructor() {
        let config = {
            CARPETA: {
                CARPETA: CARPETA,
                CAMPO: CAMPO,
                nombreFoto: 'principal.jpg'
            },
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'clubid',
        }
        super(config);
    }

    async updateTable(req, res) {
        const {
            method
        } = req.route.stack[0];
        if (method.toLowerCase() === "put") { //<- luego, repetimos para insert y delete....
            let id = req.params.id;
            let sqlDelete = 'DELETE  FROM club_music WHERE clubid = ?';
            let sqlInsert = 'INSERT INTO club_music (clubid, musicid) VALUES  '
            let musicsUpdates = req.body.musicsUpdate.split(',');
            super.sendDataToTable([id], sqlDelete)
                .then(result1 => console.log("borrado", result1))
                .then(() => {
                    let salida = sqlInsert;
                    musicsUpdates.map(value => {
                        salida += "(" + id + "," + value + "),";
                    });
                    salida = salida.substring(0, salida.length - 1) 
                    console.log('sql: ', salida);
                    const result2 =  super.sendDataToTable('[]', salida) //es promesa
                        .then( result2 => console.log("ESTE ES EL INSERT", result2) )
                        .catch(err => console.error(err));
                })


            delete req.body['musicsUpdate'];
            super.updateTable(req, res);
        }

        /**GUARDAR musicsUpdate EN OTRO CAMPO Y QUITARLO DEL REQUEST QUE HA LLEGADO*/
    }



}


module.exports = ControladorClubs;