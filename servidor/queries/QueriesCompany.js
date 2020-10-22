module.exports = {
    QueriesCompany:{
        SELECT_UNO:`select 
                        :TABLA.*,
                        c_city.cityName,
                        c_provinces.provinceid,
                        c_provinces.provinceName,
                        c_state.stateid,
                        c_state.stateName,
                        c_country.countryId,
                        c_country.countryName
                    from :TABLA 
                        JOIN c_city ON c_city.cityid = :TABLA.cityid 
                        JOIN c_provinces on c_provinces.provinceid = c_city.provinceid
                        JOIN c_state ON c_state.stateid = c_provinces.stateid
                        JOIN c_country on c_country.countryId = c_state.countryid
                    WHERE :TABLA.companyid = :id`,
        SELECT_ALL:`select 
                        :TABLA.* ,
                        c_city.cityName
                    FROM :TABLA
                    LEFT JOIN c_city ON c_city.cityid = :TABLA.cityid`,

        SELECT_SELECT_ALL: `SELECT :TABLA.companyid as id, companyName as opcion FROM :TABLA`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE companyid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE companyid = ?`
    }
}