module.exports = {
    QueriesRole: {
        SELECT_ALL: 'SELECT * FROM :TABLA',
        SELECT_SELECT_ALL: `SELECT roleid   as id,roleName  as opcion FROM :TABLA WHERE roleid   = :id`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE roleid   = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE roleid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE roleid = ?`
    }
}