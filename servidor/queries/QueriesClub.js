//                        n_dresscode.dressCodeId,
//                        companies.companyid,
//                        c_city.cityid,
module.exports = {
    QueriesClub: {
        SELECT_UNO: `select  
                        :TABLA.*, 
                        n_dresscode.dressCodeName,
                        companies.companyName,
                        c_city.cityName,
                        c_city.city_limit_por,
                        c_city.city_limit_mess,
                        c_provinces.provinceid,
                        c_provinces.province_limit_por,
                        c_provinces.province_limit_mess,
                        c_provinces.provinceName,
                        c_state.stateid,
                        c_state.state_limit_por,
                        c_state.state_limit_mess,
                        c_state.stateName,
                        c_country.countryId,
                        c_country.countryName,
                        c_country.country_limit_por,
                        c_country.country_limit_mess,
                        GROUP_CONCAT(n_music.musicName) as Musica
                    from :TABLA 
                        LEFT JOIN club_music ON club_music.clubid = :TABLA.clubid
                        LEFT JOIN n_music on club_music.musicid = n_music.musicid
                        JOIN n_dresscode ON n_dresscode.dressCodeId = :TABLA.dressCodeid
                        JOIN companies on companies.companyid = :TABLA.companyid
                        JOIN c_city ON c_city.cityid = :TABLA.cityid
                        JOIN c_provinces ON c_provinces.provinceid = c_city.provinceid
                        JOIN c_state ON c_state.stateid = c_provinces.stateid
                        JOIN c_country on c_country.countryId = c_state.countryid
                    :WHERE 
                    GROUP BY :TABLA.clubid`,
        SELECT_BY_ID: `WHERE :TABLA.clubid = :id`,
        SELECT_ALL: `select  
                        :TABLA.*, 
                        n_dresscode.dressCodeName,
                        companies.companyName,
                        c_city.cityName,
                        GROUP_CONCAT(n_music.musicName) as Musica
                    from :TABLA 
                        LEFT JOIN club_music ON club_music.clubid = :TABLA.clubid
                        LEFT JOIN n_music on club_music.musicid = n_music.musicid
                        LEFT JOIN n_dresscode ON n_dresscode.dressCodeId = :TABLA.dressCodeid
                        LEFT JOIN companies on companies.companyid = :TABLA.companyid
                        LEFT JOIN c_city ON c_city.cityid = :TABLA.cityid
                    :WHERE 
                        GROUP BY :TABLA.clubid`,


        SELECT_SELECT: `select clubid as id, clubName as opcion 
            from :TABLA ,
            WHERE companyid = idc`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE clubid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE clubid = ?`,

        SELECT_SELECT_CITYS: `SELECT DISTINCT c_city.cityid id, c_city.cityName as opcion  
            from :TABLA  
            LEFT JOIN c_city ON c_city.cityid = :TABLA.cityid`,

        SELECT_SELECT_PROVINCES: `SELECT DISTINCT c_provinces.provinceid id, c_provinces.provinceName as opcion  
            from :TABLA   
            LEFT JOIN c_city ON c_city.cityid = :TABLA.cityid
            LEFT JOIN c_provinces ON c_city.provinceid = c_provinces.provinceid`
    }
}