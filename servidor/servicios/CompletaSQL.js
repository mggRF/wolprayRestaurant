const url = require('url');
const Presenta = require("../servicios/Presenta");
/**
     * genera la clasificacion de la tabla, y los limites a listar (registros)
     * utilizando parametros que llegan en la url
     * 
     * _size=totalregistros,a partir de registro
     * _class= nombre de campo y ASC/DESC segun se desee
     * _desde= nombre de campo, y valor    _desde=campo,valor
     * _hasta= nombre de campo y valor     _hasta=campo,valor
     * _entre= nombre de campo, valor inicial, valor final _entre=campo,ini,fin
     * _where= expresion where completa (esta expresion, se añade a la posible construccion
     *      sin analizar , aunque controla la necesidad de añadir delante el WHERE o el AND
     * 
     * Resto de parametros que no empiecen por guion, se han de considerar de WHERE
     * Se sustituye la entrada :WHERE por ese valor. SI la condicion WHERE
     * existe, se añade la palabra AND, si no, la palabra WHERE. Por facilidad de envio, todos
     * los espacios en blanco, se pueden sustituir por ~. Al llegar a servidor, se hace
     * la operacion inversa.
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
    //desactivado
    //No puede funcionar tal y como esta

    static cSeguridad(req, sql) {
        // const ids = req.session.userid;
        // const role = req.session.role;
        // //si existe :ids, añadir el usuario login
        // if (role < 9 && sql.includes(':ids')) {
        //     sql.replace(':ids', number(ids))
        // } else {
        //     sql = sql.split(' WHERE ')[0];
        // }
        return sql;
    }

    /** monta los campos para where */
    static cWhere(req) {
        let salida = "";
        const queryObject = url.parse(req.url, true).query;
        Object.keys(queryObject).forEach(key => {
            if (key.substr(0, 1) != "_") {

                salida = CompletaSQL.adicionaAND(salida, key , "=" , queryObject[key]);

            }
        })
        salida = CompletaSQL.montaDesdeHasta(req, salida);
        salida = CompletaSQL.montaEntre(req, salida);
        salida = CompletaSQL.montaWhere(req, salida);

        return salida;

    }

    static montaEntre(req, salida) {
        let entre = req.query._entre;
        if (!(entre !== undefined && entre !== "" && entre !== null)) {
            entre = "";
        }

        if (entre !== "") {
            const valor = entre.split(',');
            const expresion = valor[0] +
                " BETWEEN " +
                " CAST('" + valor[1] + "' AS DATE) " +
                " AND " +
                " CAST('" + valor[2] + "' AS DATE) ";
            salida = CompletaSQL.adicionaAND(salida, expresion);

        }
        return salida;
    }

    static montaDesdeHasta(req, salida) {
        let desde = req.query._desde;
        if (!(desde !== undefined && desde !== "" && desde !== null)) {
            desde = "";
        }
        if (desde !== "") {
            let valor = desde.split(',');
            salida = CompletaSQL.adicionaAND(salida, valor[0] , ' >= ' , valor[1]);
        }

        let hasta = req.query._hasta;
        if (!(hasta !== undefined && hasta !== "" && hasta !== null)) {
            hasta = "";
        }
        if (hasta !== "") {
            let valor = hasta.split(',');
            salida = CompletaSQL.adicionaAND(salida, valor[0] , ' >= ' , valor[1]);
        }
        return salida;
    }
    static montaWhere(req, salida) {
        let where = req.query.where;
        if (!(where !== undefined && where !== "" && where !== null)) {
            where = "";
        }
        if (where !== "") {
            valor = where.replace(/~/g, ' ')
            salida = CompletaSQL.adicionaAND(salida, valor);
        }
        return salida;
    }

    static adicionaAND(salida, clave, relacion="", valor="") {
        if (salida.length > 0) salida += ' AND ';
        salida += clave + relacion ;
        if (isNaN(valor) && valor.length>0) {
            salida += "'" + valor + "'";
        } else {
            salida += valor;
        }
        return salida;
    }

    static cSQL(req, sql) {
        if (sql.indexOf(':menu')>=0){
            let menu = req.params.menu;
            sql = sql.replace(':menu', menu)
        }
        sql = CompletaSQL.cSeguridad(req, sql);
        sql += CompletaSQL.cClasYPag(req);
        let where = "";
        where = CompletaSQL.cWhere(req);
        if (where == undefined || where.length == 0) {
            sql = sql.replace(':WHERE', '');
            sql = sql.replace(':AND', '');
            return sql;
        }

        if (sql.includes(':AND')) {
            where = ' AND ' + where;
            sql = sql.replace(':AND', where);
        }
        if (sql.includes(':WHERE')) {
            where = ' WHERE ' + where;
            sql = sql.replace(':WHERE', where);
        }
        return sql;

    }
}
module.exports = CompletaSQL