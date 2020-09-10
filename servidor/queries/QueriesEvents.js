module.exports = {
    QueriesEvents: {
        SELECT_UNO: `SELECT * FROM :TABLA WHERE eventid   = :id`,
        SELECT_SELECT: `SELECT eventid as id,eventName  as opcion FROM :TABLA WHERE clubid  = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE eventid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE eventid = ?`
    }
}