module.exports = {
    QueriesIva: {
        SELECT_UNO: `SELECT 
                    :TABLA.*
                    from :TABLA
                    WHERE :TABLA.idIva = :id`,

        SELECT_ALL: `SELECT :TABLA.*  
                    FROM :TABLA
                    `,

        SELECT_SELECT: `SELECT idIva as id,  ivaDescr as opcion FROM :TABLA `,
        SELECT_SELECT_ALL: `SELECT idIva as id, ivaDescr as opcion FROM :TABLA `,

        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idIva = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idIva = ?`
    }
}