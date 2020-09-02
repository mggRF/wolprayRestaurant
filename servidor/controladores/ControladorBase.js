
const Conexion = require("../servicios/Conexion");
const { LPPAGINA } = require("../Constantes/ConstantesDataBase/ConstantesPaginacion");
const Presenta = require("../servicios/Presenta");
class ControladorBase {


    constructor(config) {
        this.config = config;
        this.connect = new Conexion();

        this.listado = this.listado.bind(this);
        this.leerUno = this.leerUno.bind(this);
        this.leerSelect = this.leerSelect.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.sendDataToTable = this.sendDataToTable.bind(this);
        this.enviaDatos = this.enviaDatos.bind(this);
        this.limite = LPPAGINA
    }
    /**
     * Enviar datos a puesto //salida API
     * @param {} res : objeto response
     * @param {*} objeto  :datos a enviar o mensaje de error plano
     * @param {*} error  : En caso de error, objeto error
     *                      
     */
    enviaDatos(res, objeto, error = null) {
        let respuesta;
        respuesta = {
            Respuesta: error || 'ok',
            Datos: objeto
        };
        console.error(error);
        if (error == null) {
            res.setHeader('Access-Control-Allow-Methods', 'HEAD,GET,POST,PUT,DELETE,OPTIONS');
            res.setHeader('Allow', 'HEAD,GET,POST,PUT,DELETE,OPTIONS');
            res.json(respuesta);
        }
        else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({ error: error, message: objeto });
        }
    }

    listado(req, res) {
        //console.log("listado", this.config.TABLA);
        let salida = [];
        const ids = req.session.userid;
        const role = req.session.role;

        this.connect.leerTabla(this.config.TABLA)
            .then(dat => {
                dat.forEach(row => {
                    //console.log("row=>",row)
                    // let ca = new this.config.MODELO(...row);
                    // console.log("ca=>",ca)
                    salida.push(row);
                })
                //console.log(salida)
                this.enviaDatos(res, salida);

            })
            .catch(err => {
                console.error(err);
                this.enviaDatos(res, "Error en lectura de tabla", err);

            });

    }


    leerCount() {
        let sql = `SELECT COUNT(*) as contador FROM ${this.config.TABLA}`;
        Presenta.log(sql)
        let dat =  this.connect.leerSql(sql)
            .then(dat => {
                Presenta.log("contador " + this.config.TABLA + " ", dat[0].contador);
                return dat[0].contador;

            })
            .catch(err => {
                Presenta.log( "Error en Leer uno", err);

            });
    }
 
    async leerUno(req, res) {
        // let valor = await this.leerCount()
        // valor.then(Presenta.log("contador leeruno" , valor));
        let id = req.params.id;

        let sql = this.config.QUERIES.SELECT_UNO.replace(':id', id);


        this.connect.leerSql(sql)
            .then(dat => {
                this.enviaDatos(res, dat);

            })
            .catch(err => {
                this.enviaDatos(res, "Error en Leer uno", err);

            });

    }

    leerSelect(req, res) {
        let id = req.params.id;
        let sql = this.config.QUERIES.SELECT_SELECT.replace(':id', id);

        const ids = req.session.userid;
        const role = req.session.role;


        this.connect.leerSql(sql)
            .then(dat => {
                //console.log("dat->", dat);
                this.enviaDatos(res, dat);
            })
            .catch(err => {
                this.enviaDatos(res, "Error en leer SELECT", err);

            });

    }

    leerALL(req, res) {
        let sql = this.config.QUERIES.SELECT_ALL;
        let where = "";

        const ids = req.session.userid;
        const role = req.session.role;
        //si existe :ids, añadir el usuario login
        if (role < 9 && sql.include(':ids')) {
            sql.replace(':ids', number(ids))
        } else {
            sql = sql.split('WHERE')[0];
        }


        sql = sql + " LIMIT " + this.limite
        this.connect.leerSql(sql)
            .then(dat => {
                //console.log("dat->", dat);
                this.enviaDatos(res, dat);
            })
            .catch(err => {
                this.enviaDatos(res, "Error en leer SELECT", err);

            });

    }






    updateTable(req, res) {
        const method = req.route.stack[0].method;
        const id = req.params.id;
        const body = req.body;

        //Datos de la sesión
        const ids = req.session.userid;
        const role = req.session.role;
        const { QUERIES } = this.config;

        switch (method.toLowerCase()) {
            case 'post':
                this.sendDataToTable([body], QUERIES.INSERT, res);
                break;
            case 'put':
                this.sendDataToTable([body, id], QUERIES.UPDATE, res);
                break;
            case 'delete':
                this.sendDataToTable([id], QUERIES.DELETE, res);
                break;
        }
    }


    sendDataToTable(data, sql, res) {
        this.connect.modifyTable(sql, data)
            .then(value => {
                this.enviaDatos(res, value);
            }).catch(err => this.enviaDatos(res, 'Ha ocurrido un error al tratar de modificar la tabla', err));
    }
}


module.exports = ControladorBase