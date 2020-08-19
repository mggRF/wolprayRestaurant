/**
 * Conexion -  Realizar conexion con base de datos
 * leertabla     - devuelve listado entero de la tabla indicada
 */
const mysql = require('mysql');

class Conexion {

     conexion() {
        this.conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'garcia1',
            database: 'contabilidadautonomos'
        });
         this.conn.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
        });
    }
    

    leerTabla(tabla) {
        if (null == this.conn) this.conexion();
        let sql = `SELECT * FROM ${tabla}`;
        console.log(sql);
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, datos) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(datos);
            })

        });
        
    }
    leerSql(sql) {
        if (null == this.conn) this.conexion();
        
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, datos) => {
                if (err) reject(err);
                resolve(datos);
            })

        });

    }
    // if (respuesta.isValid) {
    //     return respuesta;
    // }else {
    //     console.log("Error acceso------>", respuesta);
    // }


}

module.exports = Conexion;
