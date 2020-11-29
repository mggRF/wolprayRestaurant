module.exports = {
    QueriesMenu: {
        SELECT_ALL: `SELECT * FROM :TABLA WHERE idLocal = :local`,
        SELECT_SELECT_ALL: `SELECT idMenu as id,menuName as opcion FROM :TABLA WHERE idLocal = :local`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE idmenu = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idmenu = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idmenu = ?`
    }
}