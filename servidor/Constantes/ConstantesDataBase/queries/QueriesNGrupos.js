module.exports = {
    QueriesNGrupos: {
        SELECT_ALL: `SELECT * FROM :TABLA WHERE idLocal = :local`,
        SELECT_SELECT_ALL: `SELECT idGrupo as id,grupName as opcion FROM :TABLA WHERE idLocal = :local`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE idGrupo = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idGrupo = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idGrupo = ?`
    }
}