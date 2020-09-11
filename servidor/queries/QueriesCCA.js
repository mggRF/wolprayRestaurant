module.exports = {
    QueriesCCAA: {
        SELECT_UNO: `SELECT 
                    :TABLA.*,
                    c_country.countryName
                    from :TABLA
                    LEFT JOIN c_country ON c_country.countryId = :TABLA.countryid
                    WHERE :TABLA.stateid = :id`,

        SELECT_ALL: `SELECT :TABLA.* , c_country.countryName 
                    FROM :TABLA
                    LEFT JOIN c_country on :TABLA.countryid = c_country.countryId
                    `,

        SELECT_SELECT: `SELECT stateid as id,stateName as opcion FROM :TABLA WHERE countryid = :id`,

        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE stateid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE stateid = ?`
    }
}