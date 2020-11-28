module.exports = {
    QueriesImages:{
        clubs: {
            select_by_option: 'SELECT clubid as id, clubName as name, description as description,  coverUrl as image FROM :TABLA ORDER BY rand() LIMIT 1',
            select_by_id: 'SELECT clubid as id, clubName as name, description as description,  coverUrl as image FROM :TABLA WHERE clubid = :id',
            select_all: 'SELECT clubid as id, clubName as name, description as description,  coverUrl as image FROM :TABLA',
        },
        products: {
            select_by_option: 'SELECT productid as id, productName as name, description as description, imageUrl as image  FROM :TABLA ORDER BY rand() LIMIT 1',
            select_by_id: 'SELECT productid as id, productName as name, description as description, imageUrl as image  FROM :TABLA WHERE productid = :id',
            select_all: 'SELECT productid as id, productName as name, description as description, imageUrl as image  FROM :TABLA',
        },
        promotions: {
            select_by_option: 'SELECT promotionid as id, promotionName as name, promotionDescription as description,  coverUrl as image  FROM :TABLA ORDER BY rand() LIMIT 1',
            select_by_id: 'SELECT promotionid as id, promotionName as name, promotionDescription as description,  coverUrl as image  FROM :TABLA WHERE promotionid = :id',
            select_all: 'SELECT promotionid as id, promotionName as name, promotionDescription as description,  coverUrl as image  FROM :TABLA',
        },
        events: {
            select_by_option: 'SELECT eventid as id, eventName as name, eventDescription as description,  event_imagePral as image  FROM :TABLA ORDER BY rand() LIMIT 1',
            select_by_id: 'SELECT eventid as id, eventName as name, eventDescription as description,  event_imagePral as image  FROM :TABLA WHERE eventid = :id',
            select_all: 'SELECT eventid as id, eventName as name, eventDescription as description,  event_imagePral as image  FROM :TABLA',
        },
        clubevents: {
            select_by_option: `
                        SELECT clubid as id, clubName as name, description as description,  coverUrl as image 
                            FROM clubs 
                            UNION 
                        SELECT eventid, eventName, eventDescription,  event_imagePral  FROM events ORDER BY rand() LIMIT 1`,
            select_all: `
                        SELECT clubid as id, clubName as name, description as description,  coverUrl as image 
                            FROM clubs 
                            UNION 
                        SELECT eventid, eventName, eventDescription,  event_imagePral  FROM events`,
        },
    }
}


