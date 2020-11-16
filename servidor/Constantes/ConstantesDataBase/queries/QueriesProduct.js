module.exports = {
    QuerieProduct: {
        SELECT_ALL: `SELECT 
                        :TABLA.*,
                        n_grupos.grupName
                    FROM :TABLA
                    LEFT JOIN n_grupos ON :TABLA.idGrupo = n_grupos.idGrupo 
                                          AND :TABLA.idLocal = n_grupos.idLocal
                    WHERE :TABLA.idLocal = :local`,
                    
        SELECT_UNO: `select 
                        :TABLA.*,
                        
                        n_grupos.grupName
                    FROM :TABLA
                    
                    LEFT JOIN n_grupos ON :TABLA.idGrupo = n_grupos.idGrupo 
                                          AND :TABLA.idLocal = n_grupos.idLocal
                    WHERE :TABLA.idProduct = :id`,

        SELECT_SELECT: `SELECT isProduct as id,productName as opcion FROM :TABLA WHERE idLocal = :local`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idProduct = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idProduct = ?`
    }
}