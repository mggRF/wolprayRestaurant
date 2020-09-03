
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
        this.verificarMetodo = this.verificarMetodo.bind(this);
        this.enviaDatos = this.enviaDatos.bind(this);
        this.recogerImagen = this.recogerImagen.bind(this);
        this.leerCount = this.leerCount.bind(this);
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


    leerCount(req, res) {
//Atencion el sql ha de pasar por el sistema de añadir empresa/manager
        let sql = `SELECT COUNT(*) as contador FROM ${this.config.TABLA}`;
        console.log("count0>",sql)
        return this.connect.leerSql(sql)
            .then(dat => {
                this.enviaDatos(res, dat[0]);
            })
            .catch(err => {
                Presenta.log("Error en Contador", err);
            });

    }


    leerUno(req, res) {
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


    verificarMetodo(req, res) {
        const method = req.route.stack[0].method;
        console.log('Estoy pasando po rverificar imagen')
        console.log('el metodo es: ', method)
        switch (method.toLowerCase()) {
            case 'post':
                if (req.files) {
                    this.recogerImagen(req, res);
                } else {
                    return res.status(400).json({
                        ok: false,
                        Message: 'Es necesario subir una imagen'
                    });
                }
                break;
            case 'put':
                if (req.files) {
                    this.recogerImagen(req, res);
                } else {
                    this.updateTable(req, res);
                }
                break
        }




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

    recogerImagen(req, res) {

        const campo = this.config.CARPETA.CAMPO;
        const file = req.files[campo];
        if (!file) {
            return res.json({
                ok: false,
                Message: 'Ha ocurrido un fallo al tratar de recoger el campo: ' + campo
            });
        }

        if(!file.mimetype.includes('image')){
            return res.json({
                ok: false,
                Message: 'Lo que intenta subir no es una imagen'
            });
        }


        return res.json({
            ok: true,
            file: file.mimetype
        });

    }


    sendDataToTable(data, sql, res) {
        this.connect.modifyTable(sql, data)
            .then(value => {
                this.enviaDatos(res, value);
            }).catch(err => this.enviaDatos(res, 'Ha ocurrido un error al tratar de modificar la tabla', err));
    }
}


module.exports = ControladorBase