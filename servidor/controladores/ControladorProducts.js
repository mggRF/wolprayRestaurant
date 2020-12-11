/**
 * Controlador para products
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Products");
const { QueriesProduct } = require("../Constantes/ConstantesDataBase/queries/QueriesProduct");
const { QueriesNGrupos } = require("../Constantes/ConstantesDataBase/queries/QueriesNGrupos");
const GestionTokemTda = require("../servicios/GestionTokemTda");


const TABLA = 'products';
const CARPETA = 'products';
const CAMPO = 'imageUrl';



class ControladorProducts extends ControladorBase {

    constructor() {
        let config = {
            // CARPETA: {
            //     CARPETA,
            //     CAMPO,
            //     nombreFoto: 'principal.jpg'
            // },
            TABLA: TABLA,
            QUERIES: QueriesProduct,
            MODELO: MODELO,
            campoId: 'idProduct',
        }
        super(config);

        this.todosCarta = this.todosCarta.bind(this);
        this.montaPlatos = this.montaPlatos.bind(this);
        this.procesaDatos = this.procesaDatos.bind(this);
    }


    async todosCarta(req, res) {
        let salida = "";
        let sql = QueriesNGrupos.SELECT_ALL.replace(/:TABLA/gi, 'n_grupos');
        //sql = CompletaSQL.cSQL(req, sql);
        GestionTokemTda.leerTokemTda(req, res, sql)
            .then(sql => {
                this.connect.leerSql(sql)
                    .then(async dat => {
                        salida = await this.procesaDatos(dat)
                        this.enviaDatos(res, salida);
                    })

                    .catch(err => {
                        this.procesaErr(res, "Error en todosCarta--->", err);
                    });

            })
    }

    /**
     * Espera todos los menus disponibles y va montando los que corresponden al dia en cuestion
     * @param {*} dat 
     */
    async procesaDatos(dat) {
        console.log(dat)
        let salida = [];
        let conta = 0
        for await (const elem of dat) {
            console.log('Elemento', elem)

            const dat = await this.montaPlatos(elem)
            console.log("--------------------", dat)
            salida[conta] = elem;
            salida[conta].plato = dat;
            conta++;

        }
        return salida;
    }


    /**
     * Recibe los datos de un menu y organiza toda la salida de 
     * los platos correspondientes a dicho menu, devolviendo
     * un array de objetos
     * @param {objeto} elem El menu en cuestion
     */
    async montaPlatos(elem) {
        let lista = []
        let idGrupo = elem.idGrupo;
        let sql = QueriesProduct.SELECT_GRUPOS.replace(/:TABLA/gi, TABLA);
        sql = sql.replace(':grupo', idGrupo)
        console.log(sql)
        return this.connect.leerSql(sql)
    }

}


module.exports = ControladorProducts;