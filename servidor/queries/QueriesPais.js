module.exports = {
    QueriesPais: {
        SELECT_ALL: 'SELECT * FROM :TABLA',
        SELECT_SELECT: `SELECT countryId as id,countryName as opcion FROM :TABLA`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE countryId = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE countryId = ?`,
        DELETE: `DELETE FROM :TABLA WHERE countryId = ?`
    }
}