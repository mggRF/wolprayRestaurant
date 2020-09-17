/**
 * Controlador para clubs
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");
const MODELO = require("../modelos/Club");
const { QueriesClub } = require("../queries/QueriesClub");
const TABLA = 'clubs';
const CARPETA = 'clubs';
const CAMPO = 'coverUrl';

class ControladorClubs extends ControladorBase {

    constructor() {
        let config = {
            CARPETA: {
                CARPETA: CARPETA,
                CAMPO: CAMPO,
            },
            TABLA: TABLA,
            QUERIES: QueriesClub,
            MODELO: MODELO,
            campoId: 'clubid',
        }
        super(config);
    }

    async updateTable(req, res) {
        const {
            method
        } = req.route.stack[0];
        //       if (method.toLowerCase() === "put") { //<- luego, repetimos para insert y delete....
        if (method.toLowerCase() === "put") {

            let id = req.params.id;
            let sqlDelete = 'DELETE  FROM club_music WHERE clubid = ?';
            let sqlInsert = 'INSERT INTO club_music (clubid, musicid) VALUES  '
            let musicsUpdates = req.body.musicsUpdate.split(',');
            super.sendDataToTable([id], sqlDelete)
                .then(result1 => console.log("borrado", result1))
                .then(() => {
                    if (method.toLowerCase() !== "delete") {
                        let salida = sqlInsert;
                        musicsUpdates.map(value => {
                            salida += "(" + id + "," + value + "),";
                        });
                        salida = salida.substring(0, salida.length - 1)
                        console.log('sql: ', salida);
                        super.sendDataToTable([], salida) //es promesa
                            .then(result2 => console.log("ESTE ES EL INSERT", result2))
                            .catch(err => console.error(err));
                    }
                })


            delete req.body['musicsUpdate'];
        }
        super.updateTable(req, res);
    }

    /**GUARDAR musicsUpdate EN OTRO CAMPO Y QUITARLO DEL REQUEST QUE HA LLEGADO*/
    //   }

    leerSelectCitys(req,res){
        let sql = QueriesClub.SELECT_SELECT_CITYS;
        console.log(sql);
        super.leerSelectDir(req,res,sql);
    }
    leerSelectProvinces(req,res){
        let sql = QueriesClub.SELECT_SELECT_PROVINCES;
        console.log(sql);
        super.leerSelectDir(req,res,sql);
    }
    
}


module.exports = ControladorClubs;