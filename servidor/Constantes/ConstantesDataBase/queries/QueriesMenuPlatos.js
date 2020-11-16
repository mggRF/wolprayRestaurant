module.exports = {
    QueriesMenuPlato: {
        SELECT_ALL: `SELECT * FROM :TABLA WHERE idmenu = :menu`,
        SELECT_SELECT_ALL: `SELECT idmenu_platos as id,mpPlatoName as opcion FROM :TABLA WHERE idmenu = :menu`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE idmenu_platos = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idmenu_platos = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idmenu_platos = ?`
    }
}