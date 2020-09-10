module.exports = {
    QuerieProduct: {
        SELECT_ALL: `SELECT 
                        :TABLA.*,
                        n_category.categoryName
                    FROM :TABLA
                    LEFT JOIN n_category ON :TABLA.categoryid = n_category.categoryId`,
                    
        SELECT_UNO: `select 
                        :TABLA.*,
                        clubs.clubName,
                        n_category.categoryName
                    FROM :TABLA
                    LEFT JOIN clubs ON clubs.clubid = :TABLA.clubid
                    LEFT JOIN n_category ON n_category.categoryId = :TABLA.categoryid
                    WHERE :TABLA.productid = 1;`,

        SELECT_SELECT: `SELECT productid as id,productName as opcion FROM :TABLA WHERE clubid = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE productid = ?`,
        DELETE: `DELETE FROM :TABLA WHERE productid = ?`
    }
}