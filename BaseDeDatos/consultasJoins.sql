--JOINS


--Sacar información completa de una compañía
select 
	companies.*,
	users.userName, 
	c_city.cityName,
	c_provinces.provinceName,
	c_state.stateName,
	c_country.countryName
	
	from companies 
    
        JOIN users ON users.userid = companies.userid 
        JOIN c_city ON c_city.cityid = companies.cityid 
        JOIN c_provinces on c_provinces.provinceid = c_city.provinceid
        JOIN c_state ON c_state.stateid = c_provinces.stateid
        JOIN c_country on c_country.countryId = c_state.countryid
    WHERE companies.companyid = ?;
    
    
    
--Para sacar toda la información de los clubs:
select  
	clubs.*, 
	n_dresscode.dressCodeDescription,
	companies.companyName,
	c_city.cityName,
	c_provinces.provinceName,
	c_state.stateName,
	c_country.countryName,
	GROUP_CONCAT(n_music.musicName) as Musica
	
    from clubs 
    
		LEFT JOIN club_music ON club_music.clubid = clubs.clubid
		LEFT JOIN n_music on club_music.musicid = n_music.musicid
		JOIN n_dresscode ON n_dresscode.dressCodeId = clubs.dressCodeid
		JOIN companies on companies.companyid = clubs.companyid
		JOIN c_city ON c_city.cityid = clubs.cityid
		JOIN c_provinces ON c_provinces.provinceid = c_city.provinceid
		JOIN c_state ON c_state.stateid = c_provinces.stateid
		JOIN c_country on c_country.countryId = c_state.countryid
    
    WHERE clubs.clubid = ?
    GROUP BY clubs.clubid;


-- Sacar los managers y los clubs
select users.userName, clubs.clubName

	from users

		JOIN users_clubs on users_clubs.userid = users.userid
		JOIN clubs ON clubs.clubid = users_clubs.clubid;
		
