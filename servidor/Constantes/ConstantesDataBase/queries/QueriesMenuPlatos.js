module.exports = {
    QueriesMenuPlatos: {
        SELECT_ALL:
            `SELECT :TABLA.*, menu.menuName,grupo.grupName 
            FROM :TABLA 
            LEFT JOIN menu ON :TABLA.idMenu = menu.idMenu
            LEFT JOIN n_grupos as grupo ON :TABLA.mpGrupo = grupo.idGrupo 
            WHERE :TABLA.idmenu = :menu
            ORDER BY :TABLA.mpGrupo  `,

        SELECT_UNO:
            `SELECT :TABLA.*, menu.menuName,grupo.grupName,products.productName 
            FROM :TABLA 
            LEFT JOIN menu ON :TABLA.idMenu = menu.idMenu
            LEFT JOIN n_grupos as grupo ON :TABLA.mpGrupo = grupo.idGrupo 
            LEFT JOIN products ON :TABLA.mpPlato = products.idProduct
            WHERE idmenu_platos = :id`,

        SELECT_SELECT_ALL:
            `SELECT idmenu_platos as id,mpPlatoName as opcion 
            FROM :TABLA 
            WHERE idmenu = :menu`,

        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idmenu_platos = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idmenu_platos = ?`
    }
}