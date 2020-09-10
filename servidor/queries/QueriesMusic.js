module.exports = {
    QueriesMusic: {
        SELECT_ALL: `SELECT * FROM :TABLA WHERE musicid = :ids`,
        SELECT_SELECT: `SELECT musicid as id,musicName as opcion FROM :TABLA`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE musicid = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE musicid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE musicid = ?`
    }
}