/**
 * Controlador para products
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Product");
const TABLA = 'products';
const CARPETA = 'products';
const selectUno  = `select 
                        ${TABLA}.*,
                        clubs.clubName,
                        n_category.categoryName

                        FROM products

                        LEFT JOIN clubs ON clubs.clubid = ${TABLA}.clubid
                        LEFT JOIN n_category ON n_category.categoryId = ${TABLA}.categoryid

                        WHERE ${TABLA}.productid = 1;`;

const QUERIES = {
    SELECT_UNO: selectUno,
    SELECT_SELECT: `SELECT productid as id,productName as opcion FROM ${TABLA} WHERE clubid = :id`,
    INSERT: `INSERT INTO ${TABLA} SET ?`,
    UPDATE: `UPDATE ${TABLA} SET ? WHERE productid = ?`,
    DELETE: `DELETE FROM ${TABLA} WHERE productid = ?`
}


class ControladorProducts extends ControladorBase {
   
    constructor(){
        let config = {
            CARPETA: {
                CARPETA:CARPETA,
                CAMPO:'imageUrl'
            },
            TABLA: TABLA,
            QUERIES: QUERIES,
            MODELO: MODELO,
            campoId: 'productid',
        }
        super(config);
    }

    

}


module.exports = ControladorProducts;