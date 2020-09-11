module.exports = {
    DressCodeQueries:{
        SELECT_ALL:`SELECT * FROM :TABLA`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE dressCodeId = :id`,
        SELECT_SELECT: `SELECT dressCodeId as id,dressCodeDescription as opcion FROM :TABLA`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE dressCodeId = ?`,
        DELETE: `DELETE FROM :TABLA WHERE dressCodeId = ?`
    }
}