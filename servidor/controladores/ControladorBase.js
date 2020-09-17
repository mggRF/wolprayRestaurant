const Conexion = require("../servicios/Conexion");

const {
    LPPAGINA
} = require("../Constantes/ConstantesDataBase/ConstantesPaginacion");
const Presenta = require("../servicios/Presenta");
const FyleSystem = require('../modelos/FileSystem');
const { URL, VERSION } = require('../Constantes/ConstantesRutas');
const uniqid = require('uniqid');

class ControladorBase {

    constructor(config) {
        this.config = config;
        this.connect = new Conexion();
        this.fileSystem = new FyleSystem(config);




        this.leerUno = this.leerUno.bind(this);
        this.leerSelect = this.leerSelect.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.sendDataToTable = this.sendDataToTable.bind(this);
        this.enviaDatos = this.enviaDatos.bind(this);
        this.leerCount = this.leerCount.bind(this);
        this.limite = LPPAGINA;
        this.getFoto = this.getFoto.bind(this);
        this.leerALL = this.leerALL.bind(this);
        this.hacerPost = this.hacerPost.bind(this)
    }
    /**
     * Enviar datos a puesto //salida API
     * @param {} res : objeto response
     * @param {*} objeto  :datos a enviar o mensaje de error plano
     * @param {*} error  : En caso de error, objeto error
     *                      
     */
    enviaDatos(res, objeto, status = null) {


        if (status == null) {
            res.setHeader('Access-Control-Allow-Methods', 'HEAD,GET,POST,PUT,DELETE,OPTIONS');
            res.setHeader('Allow', 'HEAD,GET,POST,PUT,DELETE,OPTIONS');
            res.json({
                Ok: true,
                Datos: objeto
            });
        } else {
            res.status(status)
                .send({
                    Ok: false,
                    Message: objeto
                });
        }
    }

    obtenerFotoUrl(res, datos, status = null) {
        if (this.config.CARPETA) {
            if (datos.length) {

                let dat = datos.map(d => {
                    for (let k in d) {
                        if (k === this.config.CARPETA.CAMPO) {
                            if (d[this.config.CARPETA.CAMPO]) {

                                d[k] = URL + VERSION + this.config.CARPETA.CARPETA + '/uploads/' + d[this.config.campoId] + '/' + d[this.config.CARPETA.CAMPO];
                            } else {
                                d[k] = URL + VERSION + this.config.CARPETA.CARPETA + '/uploads/' + d[this.config.campoId] + '/' + 'nopicture.jpg';
                            }
                        }
                    }
                    return d;
                });
                this.enviaDatos(res, dat, status);
            } else {
                this.enviaDatos(res, datos, status);
            }

        } else {
            this.enviaDatos(res, datos, status);
        }
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
        if (!(size !== undefined && size !== "" && size !== null)) {
            size = req.query._size;
        }
        let clasi = req.query.clasificacion;
        if (!(clasi !== undefined && clasi !== "" && clasi !== null)) {
            clasi = req.query._class;
        }
        console.log("complementos", size, clasi)

        if (clasi !== undefined && clasi !== "" && clasi !== null) {
            salida += " ORDER BY " + clasi.split(',').join(" ");
        }

        if (size !== undefined && size !== "" && size !== null) {
            let valores = size.split(',') // SI 2 offset y limit; si 1, limit
            salida += " LIMIT ";
            salida += valores[0]
            if (valores.length > 1) {
                salida += ", " + valores[1]
            }
        }
        // console.log("salida", salida)
        return salida;
    }


    /**
     * Lista datos del objeto indexado.
     * 
     * @param {} req : objeto request.
     * @param {} res : objeto response.
     */
    leerUno(req, res) {
        let id = req.params.id;
        if (id === "count") return this.leerCount(req, res);
        let sql = this.config.QUERIES.SELECT_UNO.replace(':id', id);

        this.connect.leerSql(sql.replace(/:TABLA/gi, this.config.TABLA))
            .then(dat => {
                this.obtenerFotoUrl(res, dat);

            })
            .catch(err => {
                this.enviaDatos(res, "Error en Leer uno", err);

            });

    }

    /**
     * Lista lista objetos indexados de la base de datos en base a una referencia.
     * 
     * @param {} req : objeto request.
     * @param {} res : objeto response.
     */
    leerSelect(req, res) {
        let id = req.params.id;
        let sql = this.config.QUERIES.SELECT_SELECT.replace(':id', id);

        const ids = req.session.userid;
        const role = req.session.role;


        this.connect.leerSql(sql.replace(/:TABLA/gi, this.config.TABLA))
            .then(dat => {
                //console.log("dat->", dat);
                this.enviaDatos(res, dat);
            })
            .catch(err => {
                this.enviaDatos(res, "Error en leer SELECT", err);

            });

    }leerSelectDir(req, res, sql) {
        
        const ids = req.session.userid;
        const role = req.session.role;


        this.connect.leerSql(sql.replace(/:TABLA/gi, this.config.TABLA))
            .then(dat => {
                //console.log("dat->", dat);
                this.enviaDatos(res, dat);
            })
            .catch(err => {
                this.enviaDatos(res, "Error en leer SELECT", err);

            });

    }

    leerALL(req, res) {


        let sql = this.config.QUERIES.SELECT_ALL.replace(/:TABLA/gi, this.config.TABLA);
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
                this.obtenerFotoUrl(res, dat);
            })
            .catch(err => {
                this.enviaDatos(res, "Error en leer SELECT", err);
            });

    }


    /**
     * Actualiza tablas en la base de datos.
     * 
     * @param {} req : objeto request.
     * @param {} res : objeto response.
     */
    updateTable(req, res) {
        const {
            method
        } = req.route.stack[0];
        const id = req.params.id;
        const body = req.body;


        const file = this.verificaImagen(req);

        //Datos de la sesión
        const ids = req.session.userid;
        const role = req.session.role;
        const {
            QUERIES
        } = this.config;

        switch (method.toLowerCase()) {
            case 'post':
                this.hacerPost(body, file, res);
                break;
            case 'put':
                this.hacerPut(id, body, file, res);
                break;
            case 'delete':
                this.hacerDelete(res, id, QUERIES.DELETE);
                break;
            default:
                this.enviaDatos(res, 'Esta acción no es válida', 400);
                break;
        }
    }


    /**
     * Elimina datos indexados en la base de datos y sus objetos.
     * 
     * @param {} res : objeto response.
     * @param {} id : indice del objeto a eliminar.
     * @param {} query : query para la base de datos.
     */
    hacerDelete(res, id, query) {
        if (this.config.CARPETA) {
            if (this.fileSystem.eliminarCarpetaDeImagenes(id)) {
                console.log('Se eliminaron todas las imagenes de esta carpeta');
            } else {
                console.log('Esta carpeta no contiene imágenes');
            }
        }

        //data, sql, file = null
        const result = this.sendDataToTable([id], query);

        if (result.Ok) {
            this.enviaDatos(res, result.Data);
        } else {

            this.enviaDatos(res, result.Data, result.Status);
        }
    }


    /**
     * Verifica si el objeto admite imagenes.
     * 
     * @param {} req : objeto request.
     * 
     * @returns null: si no admite imagenes
     * @returns  -2  : si admite imágenes pero no se ah puesto el campo de recogida correctamente.
     * @returns  -1  : si admite imágenes pero no se ha enviado.
     */
    verificaImagen(req) {

        if (!this.config.CARPETA) {
            return null;
        }

        if (!req.files) {
            return -2;
        }

        const {
            CAMPO
        } = this.config.CARPETA;

        const file = req.files[CAMPO];

        if (!file) {
            return -1;
        }


        if (!file.mimetype.includes('image')) {
            return 0;
        }


        return file;

    }

    /**
     * Añade nuevos datos a la base de datos, guarda imádenes si las hay.
     * 
     * @param {} res : objeto response.
     * @param {} req : objeto request.
     * 
     */
    hacerPost(body, file, res) {

        const {
            QUERIES
        } = this.config;

        switch (file) {
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
                this.sendDataToTable([body], QUERIES.INSERT, file)
                    .then(result => {

                        if (result.Ok) {
                            this.enviaDatos(res, result.Data);
                        } else {
                            this.enviaDatos(res, result.Data, result.Status);
                        }
                    }).catch(err => {
                        this.enviaDatos(res, err.Data, err.Status);
                    });
                break;
        }
    }


    /**
     * Modifica datos indexados e la base de datos, modifica imágenes si las hay.
     * 
     * @param {} res : objeto response.
     * @param {} req : objeto request.
     * 
     */
    async hacerPut(id, body, file, res) {

        const {
            QUERIES
        } = this.config;


        if (isNaN(file) && file !== null) {
            this.fileSystem.guardarImagen(file, req.params.id);
        }


        //res,data, sql, metodo, file = null
        this.sendDataToTable([body, id], QUERIES.UPDATE)
            .then(result => {
                console.log(result)
                this.enviaDatos(res, result.Data);
            }).catch(err => {
                console.log(err)
                this.enviaDatos(res, err.Data, err.Status);
            })

        /*if (result.Ok) {
            console.log(result);
            this.enviaDatos(res, result.Data);
        } else {
            console.log(result);
            this.enviaDatos(res, result.Data, result.Status);
        }*/
    }

    getFoto(req, res) {

        if (this.config.CARPETA) {
            const id = req.params.id;
            const img = req.params.img;

            const pathFoto = this.fileSystem.getFotoUrl(id, img)


            res.sendFile(pathFoto);
        } else {
            this.enviaDatos(res, 'Acción inválida', 403);
        }
    }


    /**
     * Añade nuevos datos a la base de datos, guarda imádenes si las hay.
     * 
     * @param {} res  : objeto response.
     * @param {} data : Datos a enviar a la base de datos.
     * @param {} sql  : Query para ejecutar en la base de datos.
     * @param {} file : Archivo para crear o modificar si lo hay.
     * 
     */
    async sendDataToTable(data, sql, file = null) {
        if (file !== null && file !== undefined) {
            const nombreUnico = uniqid();
            data[0][this.config.CARPETA.CAMPO] = nombreUnico;
        }

        const result = await new Promise((resolve, reject) => {
            this.connect.modifyTable(sql.replace(/:TABLA/gi, this.config.TABLA), data)
                .then(value => {

                    if (value.insertId && file !== null) {

                        this.fileSystem.guardarImagen(file, value.insertId, data[0][this.config.CARPETA.CAMPO])
                            .then(response => {
                                console.log('OK => ', response)
                                resolve({
                                    Ok: true,
                                    Data: 'Se ha modificado correctamente la tabla en la base de datos. ' + response
                                })
                            }).catch(err => {
                                console.log('Error=> ', err)
                                reject({
                                    Ok: false,
                                    Data: err,
                                    Status: 500
                                })
                            });
                    } else {
                        console.log('OK => ', value);
                        resolve({
                            Ok: true,
                            Data: 'Se ha modificado correctamente la tabla en la base de datos',
                            status: 500
                        })
                    }
                }).catch(err => {
                    console.log('ERROR => ', err);
                    reject({
                        OK: false,
                        Data: err,
                        Status: 500
                    })
                });
        });

        return result;
    }
}


module.exports = ControladorBase