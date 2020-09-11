module.exports = {
    QueriesUser: {
        SELECT_ALL:'SELECT * FROM :TABLA',
        SELECT_SELECT: `SELECT userid  as id,userName  as opcion FROM :TABLA WHERE roleid = :id`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE userid  = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE userid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE userid = ?`,
        SELECT_BY_MAIL: `SELECT * FROM :TABLA WHERE mail  = :email`
    }
}