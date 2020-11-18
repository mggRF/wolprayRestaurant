module.exports = {
    QueriesNLocalcity: {
        SELECT_ALL: `SELECT * FROM :TABLA WHERE idlocal = :local`,
        SELECT_SELECT_ALL: `SELECT idLocalCity as id,lcName as opcion FROM :TABLA WHERE idLocal = :local`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE idLocalCity = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idLocalCity = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idLocalCity = ?`
    }
}