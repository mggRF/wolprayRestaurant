const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Nmusic");
const TABLA = 'club_music';

const QUERIES = {
    INSERT: `INSERT ${TABLA} SET ? WHERE musicid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE musicid = ?`
}

class ControladorClubMusic extends ControladorBase{
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QUERIES,
            MODELO:MODELO,
            campoId: 'musicid',

        }
        super(config);
    }
   insertsmusics(){

   }

}
module.exports = ControladorClubMusic;