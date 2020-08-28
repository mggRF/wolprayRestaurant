
'use strict';
/**
 * Conexion -  Realizar conexion con base de datos
 * leertabla     - devuelve listado entero de la tabla indicada
 */
const mysql = require('mysql');
const util = require('util');
const Presenta = require('./Presenta');
const CONFIGDB = require('../Constantes/ConstantesDataBase/configDB');

class Conexion {

     constructor() {
         this.pool = mysql.createPool(CONFIGDB);
        this.pool.getConnection((err, connection) => {
            if (err) {
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    Presenta.error('Database connection was closed.')
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                    Presenta.error('Database has too many connections.')
                }
                if (err.code === 'ECONNREFUSED') {
                    Presenta.error('Database connection was refused.')
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
                        Presenta.log("resolve",rows);
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
                        Presenta.log("resolve",rows);
                        resolve(rows);
                    }
                });
            });
            return rows;
        });
        return result;

    }

    async modifyTable(sql, data){
        const result = await this.usePooledConnectionAsync(async conn => {
            const rows = await new Promise((resolve, reject) => {
                conn.query(sql,data, (err) => {
                    if (err) {
                        reject(err);
                        Presenta.log('Ha ocurriso un error al tratar de insertar')
                    } else {
                        resolve('Se ha modificado la tabla correctamente');
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
