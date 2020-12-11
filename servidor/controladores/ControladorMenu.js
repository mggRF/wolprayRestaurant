/**
 * Controlador para menus
 * recibe llamadas para editar, añadir, listar y borrar clubs
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Menu");
const { QueriesMenu } = require("../Constantes/ConstantesDataBase/queries/QueriesMenu");
const { QueriesMenuPlatos } = require("../Constantes/ConstantesDataBase/queries/QueriesMenuPlatos");
const GestionTokemTda = require("../servicios/GestionTokemTda");

const TABLA = 'menu';

class ControladorMenu extends ControladorBase {

    constructor() {
        let config = {
            TABLA: TABLA,
            QUERIES: QueriesMenu,
            MODELO: MODELO,
            campoId: 'idMenu',
        }
        super(config);
        this.todosMenuCompleto = this.todosMenuCompleto.bind(this);
        this.montaPlatos = this.montaPlatos.bind(this);
        this.procesaDatos = this.procesaDatos.bind(this);
        this.decideVision = this.decideVision.bind(this);
        this.verPorDia = this.verPorDia.bind(this);
    }

    /**
     * Facilita el Json necesario para mostrar el menu
     * @param {*} req 
     * @param {*} res 
     */
    async todosMenuCompleto(req, res) {
        let salida = "";
        let sql = QueriesMenu.SELECT_ALL.replace(/:TABLA/gi, TABLA);
        //sql = CompletaSQL.cSQL(req, sql);
        GestionTokemTda.leerTokemTda(req, res, sql)
            .then(sql => {
                this.connect.leerSql(sql)
                    .then(async dat => {
                        salida = await this.procesaDatos(dat)
                        this.enviaDatos(res, salida);
                    })

                    .catch(err => {
                        this.procesaErr(res, "Error en todosMenuCompleto--->", err);
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
            if (this.decideVision(elem)) {
                const dat = await this.montaPlatos(elem)
                console.log("--------------------",dat)
                salida[conta] = elem;
                salida[conta].plato = dat;
                conta++;
            }
        }
        return salida;
    }
    /**
     * decide si un menu se visualiza o no en funcion del contenido
     * del campo menuSeq
     * @param {objeto} elem El menu en cuestion
     */
    decideVision(elem) {
        const fecha = new Date();
        const diaSem = fecha[fecha.getDay()]
        let unico = ''
        let mediodia = ''
        let noche = ''
        let ver = false;
        let hora = fecha.getHours();
        let ident = elem.menuSeq.trim();
        if (Array.isArray(ident)) ident = ident.join(',');
        let rango = ident;
        if (ident && ident.indexOf("/")> 0) {
            console.log(">" + ident + "<")
            rango = ident.split('/');

            console.log("a", rango)
            if (!rango.length || (rango.length && rango.length === 0)) {
                unico = ident
            }
        }
        else {
            unico = ident
        }
        for (let lista of rango) {
            if (lista.substring(0, 2) === 'M-') mediodia = lista.substring(2)
            if (lista.substring(0, 2) === 'N-') noche = lista.substring(2)
        }
        console.log(mediodia, '/', noche, '/', unico, '/', rango)
        ver = this.verPorDia(unico);
        if (!ver) {
            if (hora >= 15) {
                ver = this.verPorDia(noche);
            } else {
                ver = this.verPorDia(mediodia);
            }
        }
        return ver;
    }

    verPorDia(lista) {
        const dia = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']
        const fecha = new Date();
        const diaSem = dia[fecha.getDay()]


        if (!lista || lista === "" || lista === '*') { // si no hay condicion, se visualiza siempre
            console.log('pasa *', lista)
            return true;
        }
        if (lista.indexOf(diaSem)>0) {
            console.log('pasa diaSem', diaSem)
            return true
        }
        console.log('no pasa ', lista)
        return false;

    }

    /**
     * Recibe los datos de un menu y organiza toda la salida de 
     * los platos correspondientes a dicho menu, devolviendo
     * un array de objetos
     * @param {objeto} elem El menu en cuestion
     */
    async montaPlatos(elem) {
        let lista = []
        let idmenu = elem.idMenu;
        let sql = QueriesMenuPlatos.SELECT_ALL.replace(/:TABLA/gi, "menu_platos");
        sql = sql.replace(':menu', idmenu)
        console.log(sql)
        return this.connect.leerSql(sql)



    }
}


module.exports = ControladorMenu;