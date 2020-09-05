const Conexion = require("../servicios/Conexion");
const { LPPAGINA } = require("../Constantes/ConstantesDataBase/ConstantesPaginacion");
const Presenta = require("../servicios/Presenta");
const FyleSystem = require('../modelos/FileSystem');
class ControladorBase {

    constructor(config) {
        this.config = config;
        this.connect = new Conexion();
        this.fileSystem = new FyleSystem(config);


        this.listado = this.listado.bind(this);
        this.leerUno = this.leerUno.bind(this);
        this.leerSelect = this.leerSelect.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.sendDataToTable = this.sendDataToTable.bind(this);
        this.enviaDatos = this.enviaDatos.bind(this);
        this.guardarImagen = this.guardarImagen.bind(this);
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
    enviaDatos(res, objeto, status = null) {
        let respuesta;
        respuesta = {
            Ok: true,
            Datos: objeto
        };
        if (status == null) {
            res.setHeader('Access-Control-Allow-Methods', 'HEAD,GET,POST,PUT,DELETE,OPTIONS');
            res.setHeader('Allow', 'HEAD,GET,POST,PUT,DELETE,OPTIONS');
            res.json(respuesta);
        }
        else {
            res.status(status)
                .send({ Ok: false, Message: objeto });
        }
    }

    listado(req, res) {
        this.config.QUERIES.SELECT_ALL = "SELECT * FROM " + this.config.TABLA;

        return this.leerALL(req, res);
        // let salida = [];
        // const ids = req.session.userid;
        // const role = req.session.role;

        // this.connect.leerTabla(this.config.TABLA)
        //     .then(dat => {
        //         dat.forEach(row => {
        //             //console.log("row=>",row)
        //             // let ca = new this.config.MODELO(...row);
        //             // console.log("ca=>",ca)
        //             salida.push(row);
        //         })
        //         //console.log(salida)
        //         this.enviaDatos(res, salida);

        //     })
        //     .catch(err => {
        //         console.error(err);
        //         this.enviaDatos(res, "Error en lectura de tabla", err);

        //     });

    }


    leerCount(req, res) {
        //Atencion el sql ha de pasar por el sistema de añadir empresa/manager
        let sql = `SELECT COUNT(*) as contador FROM ${this.config.TABLA}`;
        return this.connect.leerSql(sql)
            .then(dat => {
                this.enviaDatos(res, dat[0]);
            })
            .catch(err => {
                Presenta.log("Error en Contador", err);
            });

    }
    /**
     * genera la clasificacion de la tabla, y los limites a listar (registros)
     * utilizando parametros que llegan en al urj
     * size=totalregistros,a partir de registro
     * clasificador= nombre de campo y ASC/DESC segun se desee
     * @param { } req 
     */
    conplementoSQL(req) {
        let salida = "";
        let size = req.query.size;
        let clasi = req.query.clasificacion;
        // console.log("complementos", size, clasi)

        if (clasi !== undefined) {
            salida += " ORDER BY " + clasi.split(',').join(" ");
        }

        if (size !== undefined) {
            let valores = size.split(',')   // SI 2 offset y limit; si 1, limit
            salida += " LIMIT ";
            salida += valores[0]
            if (valores.length > 1) {
                salida += ", " + valores[1]
            }
        }
        // console.log("salida", salida)
        return salida;
    }


    leerUno(req, res) {
        let id = req.params.id;
        if (id === "count") return this.leerCount(req, res);
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


        sql = sql + this.conplementoSQL(req);
        // console.log("sql---------->", sql)
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
        const { method } = req.route.stack[0];
        const id = req.params.id;

        //Datos de la sesión
        const ids = req.session.userid;
        const role = req.session.role;
        const { QUERIES } = this.config;

        switch (method.toLowerCase()) {
            case 'post':
                this.hacerPost(req, res);
                break;
            case 'put':
                this.hacerPut(req, res);
                break;
            case 'delete':
                this.sendDataToTable(res, [id], QUERIES.DELETE);
                break;
            default:
                this.enviaDatos(res, 'Esta acción no es válida', 400);
                break;
        }
    }


    verificaImagen(req) {

        if (!this.config.CARPETA) {
            return null;
        }

        if (!req.files) {
            return -2;
        }

        const { CAMPO } = this.config.CARPETA;

        const file = req.files[CAMPO];

        if (!file) {
            return -1;
        }


        if (!file.mimetype.includes('image')) {
            return 0;
        }


        return file;

    }

    hacerPost(req, res) {
        const body = req.body;

        //Datos de la sesión
        const ids = req.session.userid;
        const role = req.session.role;
        const { QUERIES } = this.config;

        const verifiImage = this.verificaImagen(req);

        switch (verifiImage) {
            case 0:
                this.enviaDatos(res, 'Lo que intenta subir no es una imagen', 400);
                break;
            case -1:
                this.enviaDatos(res, 'Tienes un error en el nombre del campo, el nombre ha de ser: ' + CAMPO, 400);
                break;
            case -2:
                this.enviaDatos(res, 'Es obligatorio subir subir una imagen', 400);
                break;
            default:
                const file = verifiImage;

                this.sendDataToTable(res, [body], QUERIES.INSERT, 'post', file);
                break;
        }
    }

    async hacerPut(req, res) {
        const id = req.params.id;
        const body = req.body;

        const { CAMPO } = this.config.CARPETA;
        let file;

        //Datos de la sesión
        const ids = req.session.userid;
        const role = req.session.role;
        const { QUERIES } = this.config;

        let verifiImage = this.verificaImagen(req);


        if (isNaN(verifiImage) && verifiImage !== null) {
            this.fileSystem.guardarImagenTemporal(verifiImage, req.params.id);
        }

        //res,data, sql, metodo, file = null
        this.sendDataToTable(res, [body, id], QUERIES.UPDATE, verifiImage);
    }

    async guardarImagen(file, id) {
        return await this.fileSystem.guardarImagenTemporal(file, id);

    }


    sendDataToTable(res, data, sql, file = null) {

        this.connect.modifyTable(sql, data)
            .then(value => {
                if (value.insertId && file !== null) {
                    this.guardarImagen(file, value.insertId)
                        .then(response => {
                            this.enviaDatos(res, 'Se ha modificado correctamente la tabla en la base de datos');

                        }).catch(err => this.enviaDatos(res, err, 500));
                } else {
                    this.enviaDatos(res, 'Se ha modificado correctamente la tabla en la base de datos');
                }
            }).catch(err => this.enviaDatos(res, err, 500));
    }
}


module.exports = ControladorBase