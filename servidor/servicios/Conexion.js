/**
 * Conexion -  Realizar conexion con base de datos
 * leertabla     - devuelve listado entero de la tabla indicada
 */
const mysql = require('mysql');
const util = require('util')

class Conexion {

     constructor() {
         this.pool = mysql.createPool({
            connectionLimit : 10,
            host: 'localhost',
            user: 'wolprayusr',
            password: 'UsrWolpray',
            database: 'wolpraydb_v01'
        });
        this.pool.getConnection((err, connection) => {
            if (err) {
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.error('Database connection was closed.')
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                    console.error('Database has too many connections.')
                }
                if (err.code === 'ECONNREFUSED') {
                    console.error('Database connection was refused.')
                }
            }
            if (connection) connection.release()
            return
        })
        this.pool.query = util.promisify(this.pool.query);
    }

    async usePooledConnectionAsync(actionAsync) {
        const conn = await new Promise((resolve, reject) => {
            this.pool.getConnection((ex, conn) => {
                if (ex) {
                    reject(ex);
                } else {
                    resolve(conn);
                }
            });
        });
        try {
            return await actionAsync(conn);
        } finally {
            conn.release();
        }
    }

    async leerTabla(tabla) {
       
        const result = await this.usePooledConnectionAsync(async conn => {
            const rows = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM ${tabla}`, (ex, rows) => {
                    if (ex) {
                        reject(ex);
                    } else {
                        console.log("resolve",rows);
                        resolve(rows);
                    }
                    
                });
            });          
            return rows;
        });
        return result
    };


    async leerSql(sql) {
        const result = await this.usePooledConnectionAsync(async conn => {
            const rows = await new Promise((resolve, reject) => {
                conn.query(sql, (ex, rows) => {
                    if (ex) {
                        reject(ex);
                    } else {
                        console.log("resolve",rows);
                        resolve(rows);
                    }
                });
            });
            return rows;
        });
        return result;

    }
    // if (respuesta.isValid) {
    //     return respuesta;
    // }else {
    //     console.log("Error acceso------>", respuesta);
    // }


}

module.exports = Conexion;
