module.exports = {
    QueriesLocals: {
        SELECT_UNO: `select 
                        :TABLA.*,
                        companies.companyName,
                        c_city.cityName,
                        c_provinces.provinceid,
                        c_provinces.provinceName,
                        c_state.stateid,
                        c_state.stateName,
                        c_state.countryid,
                        c_country.countryName
                    from :TABLA 
                        JOIN c_city ON c_city.cityid = :TABLA.idCity 
                        JOIN c_provinces on c_provinces.provinceid = c_city.provinceid
                        JOIN c_state ON c_state.stateid = c_provinces.stateid
                        JOIN c_country on c_country.countryId = c_state.countryid
                        JOIN companies ON companies.idCompany = :TABLA.idCompany
                    WHERE :TABLA.idLocals = :id`,
        SELECT_ALL: `select 
                        :TABLA.* ,
                        c_city.cityName,
                        companies.companyName
                    FROM :TABLA
                    JOIN c_city ON c_city.cityid = :TABLA.idCity
                    JOIN companies ON companies.idCompany = :TABLA.idCompany
                   `,

        SELECT_SELECT_ALL: `SELECT :TABLA.idLocals as id, locName as opcion 
                FROM :TABLA
                `,
        SELECT_SELECT: `SELECT :TABLA.idLocals as id, locName as opcion 
                FROM :TABLA
                `,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idLocals = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idLocals = ?`,

        CONVER_TOKEM2NUMERO:
            `SELECT idLocals as id FROM :TABLA WHERE locTokem = :tokemLocal`
    }
}