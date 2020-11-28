module.exports = {
    QueriesNLocalcity: {
        SELECT_ALL: 
            `SELECT :TABLA.*,cityName , locName
             FROM :TABLA 
             JOIN c_city ON c_city.cityid = :TABLA.idCity
             JOIN locals ON locals.idLocals = :TABLA.idLocal
             WHERE idlocal = :local`,
        SELECT_SELECT_ALL: 
            `SELECT idLocalCity as id,lcName as opcion 
                        FROM :TABLA WHERE idLocal = :local`,
        SELECT_UNO: 
            `SELECT :TABLA.*,cityName , locName
            FROM :TABLA 
            JOIN c_city ON c_city.cityid = :TABLA.idCity
            JOIN locals ON locals.idLocals = :TABLA.idLocal
            WHERE idLocalCity = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idLocalCity = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idLocalCity = ?`
    }
}