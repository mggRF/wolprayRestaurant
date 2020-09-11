module.exports = {
    QueriesClub: {
        SELECT_UNO: `select  
                        :TABLA.*, 
                        n_dresscode.dressCodeId,
                        n_dresscode.dressCodeDescription,
                        companies.companyid,
                        companies.companyName,
                        c_city.cityid,
                        c_city.cityName,
                        c_provinces.provinceid,
                        c_provinces.provinceName,
                        c_state.stateid,
                        c_state.stateName,
                        c_country.countryId,
                        c_country.countryName,
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
                    WHERE :TABLA.clubid = :id
                    GROUP BY :TABLA.clubid`,

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
                    GROUP BY :TABLA.clubid`,


        SELECT_SELECT: `select clubid as id, clubName as option from :TABLA WHERE companyid = id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE clubid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE clubid = ?`
    }
}