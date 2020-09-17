const url = require('url');
/**
     * genera la clasificacion de la tabla, y los limites a listar (registros)
     * utilizando parametros que llegan en al urj
     * _size=totalregistros,a partir de registro
     * _class= nombre de campo y ASC/DESC segun se desee
     * Resto de parametros que no empiecen por guion, se han de considerar de WHERE
     * Se sustituye la entrada :WHERE por ese valor. SI la condicion WHERE
     * existe, se añade la palabra AND, si no, la palabra WHERE
     * 
     * @param { } req 
     */
class CompletaSQL {


    static cClasYPag(req) {
        let salida = "";
        let size = req.query.size;
        if (!(size !== undefined && size !== "" && size !== null)) {
            size = req.query._size;
        }
        let clasi = req.query.clasificacion;
        if (!(clasi !== undefined && clasi !== "" && clasi !== null)) {
            clasi = req.query._class;
        }
        console.log("complementos", size, clasi)

        if (clasi !== undefined && clasi !== "" && clasi !== null) {
            salida += " ORDER BY " + clasi.split(',').join(" ");
        }

        if (size !== undefined && size !== "" && size !== null) {
            let valores = size.split(',') // SI 2 offset y limit; si 1, limit
            salida += " LIMIT ";
            salida += valores[0]
            if (valores.length > 1) {
                salida += ", " + valores[1]
            }
        }
        // console.log("salida", salida)
        return salida;
    }
    static cSeguridad(req, sql){   
        const ids = req.session.userid;
        const role = req.session.role;
        //si existe :ids, añadir el usuario login
        if (role < 9 && sql.includes(':ids')) {
            sql.replace(':ids', number(ids))
        } else {
            sql = sql.split(' WHERE ')[0];
        }
        return sql;
    }

    /** monta los campos para where */
    static cWhere(req){
        let salida="";
        const queryObject = url.parse(req.url,true).query;
        Object.keys(queryObject).forEach(key =>{
            if (key.substr(0,1)!="_"){
                if (salida.length > 0 ) salida += ' AND '
                salida += key + "=" + queryObject[key];
                
            }
        })
        return salida;

    }
    static cSQL(req, sql){
        sql= CompletaSQL.cSeguridad(req, sql);
        sql += CompletaSQL.cClasYPag(req);
        let where = "";
        where = CompletaSQL.cWhere(req);
        if (where == undefined || where.length == 0) {
            sql = sql.replace(':WHERE', '');
            return sql;
        }
        console.log("WHERE0_>",where);
        if (sql.includes(' WHERE ')){
            where = ' AND ' + where;
            console.log("WHEREa_>",where);
        } else {
            where = ' WHERE ' + where;
            console.log("WHEREb_>",where);
        }
        console.log("WHERE_>",where);
        sql = sql.replace(':WHERE', where);
        return sql;

    }
}
module.exports = CompletaSQL