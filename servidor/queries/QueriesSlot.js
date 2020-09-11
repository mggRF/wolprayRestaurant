module.exports = {
    QueriesSlot: {
        SELECT_ALL:`SELECT 
                        :TABLA.*,
                        clubs.clubName
                    from :TABLA
                    LEFT JOIN clubs ON :TABLA.slotid = clubs.clubid`,

        SELECT_SELECT: `SELECT slotid  as id,clubid  as opcion FROM :TABLA WHERE clubid  = :id`,
        SELECT_UNO: `SELECT * FROM :TABLA WHERE slotid  = :id`,
        SELECT_MES_CLUB: `SELECT * FROM :TABLA WHERE YEAR( day ) = :ano AND MONTH( day ) = :mes and clubid  = :id ORDER BY day ASC`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE slotid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE slotid = ?`
    }
}