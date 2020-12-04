module.exports = {
    QuerieProduct: {
        SELECT_ALL: `SELECT 
                        :TABLA.*,
                        locals.locName,
                        n_grupos.grupName
                    FROM :TABLA
                    LEFT JOIN n_grupos ON :TABLA.idGrupo = n_grupos.idGrupo 
                                          AND :TABLA.idLocal = n_grupos.idLocal
                    LEFT JOIN locals ON :TABLA.idLocal = locals.idLocals
                    WHERE :TABLA.idLocal = :local`,

        SELECT_UNO: `select 
                        :TABLA.*,
                        locals.locName,
                        n_grupos.grupName
                    FROM :TABLA
                    
                    LEFT JOIN n_grupos ON :TABLA.idGrupo = n_grupos.idGrupo 
                                          AND :TABLA.idLocal = n_grupos.idLocal
                    LEFT JOIN locals ON :TABLA.idLocal = locals.idLocals
                    WHERE :TABLA.idProduct = :id`,

        SELECT_SELECT: `SELECT idProduct as id,productName as opcion 
                FROM :TABLA 
                WHERE idLocal = :local`,
        SELECT_SELECT_ALL: `SELECT idProduct as id,productName as opcion 
                FROM :TABLA 
                WHERE idLocal = :local`,

        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idProduct = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idProduct = ?`
    }
}