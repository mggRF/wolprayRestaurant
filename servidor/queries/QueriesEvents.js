module.exports = {
    QueriesEvents: {
        SELECT_ALL:`select 
                        events.* ,
                        clubs.clubName
                    from events    
                    LEFT JOIN clubs ON events.clubid = clubs.clubid
                    :WHERE`,
                    
        SELECT_UNO: `SELECT * FROM :TABLA WHERE eventid   = :id`,
        
        SELECT_SELECT: `SELECT eventid as id,eventName  as opcion FROM :TABLA WHERE clubid  = :id`,
        SELECT_SELECT_ALL: `SELECT eventid as id,eventName  as opcion FROM :TABLA `,
       
        INSERT: `INSERT INTO :TABLA SET ?`,
        
        UPDATE: `UPDATE :TABLA SET ? WHERE eventid = ?`,
        
        DELETE: `DELETE FROM :TABLA WHERE eventid = ?`
        
    }
}