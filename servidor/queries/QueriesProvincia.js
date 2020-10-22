module.exports = {
    QueriesProvincia: {
        SELECT_ALL: `SELECT 
                        :TABLA.*,
                        c_state.stateName as estateName
                    from :TABLA
                    LEFT JOIN c_state ON :TABLA.stateid = c_state.stateid`,
                    
        SELECT_SELECT: `SELECT provinceid as id,provinceName as opcion FROM :TABLA WHERE stateid = :id`,
        SELECT_SELECT_ALL: `SELECT provinceid as id,provinceName as opcion FROM :TABLA `,
        SELECT_UNO: `SELECT :TABLA.* FROM :TABLA WHERE provinceid = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE provinceid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE provinceid = ?`
    }
}