'use strict';
/**
 * tokemTda2local -  convierte un tokem a un nimero de local
 * local2TokemTda - devuelve un nuevo tokem del local indicado
 */
const Conexion = require("./Conexion");
const Presenta = require('./Presenta');
const { QueriesLocals } = require("../Constantes/ConstantesDataBase/queries/QueriesLocals");
const TABLA = 'locals';

class GestionTokemTda {

    constructor() {

    }

    static tokemTda2Local(controller, tokem, res) {
        let connect = new Conexion();
        let query = QueriesLocals.CONVER_TOKEM2NUMERO;
        let sql = query.replace(/:TABLA/gi, TABLA)
        sql = sql.replace(':tokemLocal', "'" + tokem + "'");
        console.log("sqlTokem",sql)
        return connect.leerSql(sql)
            .then(vtk => {
                if (vtk.length > 0) {
                    console.log('vtk',vtk)
                    return Promise.resolve(vtk[0].id)
                } else {
                    controller.procesaErr(res, "Problema en acceso a tokem", 404)
                }
            })
            .catch(error => {
                controller.procesaErr(res, "Problema en leer a tokem-" + error, 404)         
            });

    }



    static local2TokemTda(local) {
        let connect = new Conexion();
        let query = QueriesLocals.CONVER_TOKEM2NUMERO;

        let sql = query.replace(/:TABLA/gi, TABLA)
        let intentos = 0
        do {
            let tokem = crypto.randomBytes(64).toString("hex");
            sql = sql.replace(':tokemLocal', "'" + tokem + "'");
            console.log(tokem);
            connect.leerSql(sql)
                .then(vtk => {
                    if (vtk.lengt > 0) {
                        continue
                    } else {
                        return tokem
                    }
                })
        } while (intentos++ < 10)

    }

}

// const generateToken = function(userId) {
//     return new Promise(function(resolve, reject) {
//         User.findOne({userId: userId}, function(err, user) {
//             function find() {
//                 var token = Common.randomGenerator(50);
//                 User.find({tokens: e}, function(err, result) {
//                     if (err) {
//                         reject('Error querying the database');
//                     } else {
//                         if (result.length === 0) {
//                             if (user.tokens === undefined) {
//                                 user.tokens = [];
//                             }
//                             user.tokens.push(e);
//                             resolve();
//                         } else {
//                             // do another find until we don't find a token
//                             find();
//                         }
//                     }
//                 });
//             }

//             if (user !== null) {
//                 find();
//             } else {
//                 reject('UserNotFound');
//             }
//         });
//     });
// };


module.exports = GestionTokemTda;
