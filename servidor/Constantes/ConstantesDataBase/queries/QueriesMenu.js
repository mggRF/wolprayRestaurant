module.exports = {
    QueriesMenu: {
        SELECT_ALL:
            `SELECT :TABLA.*,locName
             FROM :TABLA
             LEFT JOIN locals on :TABLA.idLocal = locals.idLocals
             WHERE idLocal = :local`,
        SELECT_SELECT_ALL:
            `SELECT idMenu as id,menuName as opcion 
             FROM :TABLA 
             WHERE idLocal = :local`,
        SELECT_SELECT:
            `SELECT idMenu as id,menuName as opcion 
             FROM :TABLA 
             WHERE idLocal = :id`,
        SELECT_UNO:
            `SELECT :TABLA.*,locName
             FROM :TABLA 
             LEFT JOIN locals on :TABLA.idLocal = locals.idLocals
             WHERE idmenu = :id`,
        INSERT: `INSERT INTO :TABLA SET ?`,
        UPDATE: `UPDATE :TABLA SET ? WHERE idmenu = ?`,
        DELETE: `DELETE FROM :TABLA WHERE idmenu = ?`,

        // SELECT_MENU:
        //     `SELECT :TABLA.*,locName,ng.grupName, mp.*
        //     FROM :TABLA 
        //     LEFT JOIN locals on :TABLA.idLocal = locals.idLocals
        //     LEFT JOIN menu_platos as mp on :TABLA.idMenu = mp.idMenu
        //     LEFT JOIN n_grupos as ng on  mp.mpGrupo = ng.idGrupo
        //     WHERE :TABLA.idMenu  = 1
        //     ORDER BY mp.mpGrupo`
    }
}