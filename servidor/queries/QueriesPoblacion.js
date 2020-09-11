module.exports = {
    QueriesPoblacion: {
        SELECT_ALL: 'SELECT * FROM :TABLA',
        SELECT_SELECT: `SELECT cityid as id,cityName as opcion FROM :TABLA WHERE provinceid  = :id`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE cityid = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE cityid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE cityid = ?`
    }
}