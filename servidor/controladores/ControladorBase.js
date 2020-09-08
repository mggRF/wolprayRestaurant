const Conexion = require("../servicios/Conexion");
const {
    LPPAGINA
} = require("../Constantes/ConstantesDataBase/ConstantesPaginacion");
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
        } else {
            res.status(status)
                .send({
                    Ok: false,
                    Message: objeto
                });
        }
    }

    /**
     * Lista todos los archivos de la base de datos.
     * 
     * @param {} req : objeto request.
     * @param {} res : objeto response.
     */
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
        this.connect.leerSql(sql)
            .then(dat => {
                this.enviaDatos(res, dat);

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
                this.hacerPost(req, file, res);
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
                const result = this.sendDataToTable([body], QUERIES.INSERT, file);
                if (result.Ok) {
                    console.log(result);
                    this.enviaDatos(res, result.Data);
                } else {
                    console.log(result);
                    this.enviaDatos(res, result.Data, result.Status);
                }
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
            this.fileSystem.guardarImagenTemporal(file, req.params.id);
        }


        //res,data, sql, metodo, file = null
        this.sendDataToTable([body, id], QUERIES.UPDATE)
        .then(result =>{
            console.log(result)
                this.enviaDatos(res, result.Data);
        }).catch(err=>{
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
        const result = await new Promise((resolve, reject) => {
            this.connect.modifyTable(sql, data)
                .then(value => {

                    if (value.insertId && file !== null) {
                        this.guardarImagen(file, value.insertId)
                            .then(response => {
                                console.log('OK => ', response)
                                resolve ({
                                    Ok: true,
                                    Data: 'Se ha modificado correctamente la tabla en la base de datos. ' + response
                                })
                            }).catch(err => {
                                console.log('Error=> ', err)
                                reject( {
                                    Ok: false,
                                    Data: err,
                                    Status: 500
                                })
                            });
                    } else {
                        console.log('OK => ', value);
                        resolve( {
                            Ok: true,
                            Data: 'Se ha modificado correctamente la tabla en la base de datos'
                        })
                    }
                }).catch(err => {
                    console.log('ERROR => ', err);
                    reject( {
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
/**
 * this.connect.modifyTable(sql, data)
            .then(value => {
                
                if (value.insertId && file !== null) {
                    this.guardarImagen(file, value.insertId)
                        .then(response => {
                            console.log('OK => ',response)
                            return {
                                Ok: true,
                                Data: 'Se ha modificado correctamente la tabla en la base de datos. ' + response
                            }
                        }).catch(err => {
                            console.log('Error=> ',err)
                            return {
                                Ok: false,
                                Data: err,
                                Status: 500
                            }
                        });
                } else {
                    console.log('OK => ',value);
                    return {
                        Ok: true,
                        Data: 'Se ha modificado correctamente la tabla en la base de datos'
                    }
                }
            }).catch(err => {
                console.log('ERROR => ',err);
                return {
                    OK: false,
                    Data: err,
                    Status: 500
                }
            });
 * 
 * 
 * 
 */