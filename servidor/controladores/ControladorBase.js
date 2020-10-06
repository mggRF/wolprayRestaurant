const Conexion = require("../servicios/Conexion");
const CompletaSQL = require("../servicios/CompletaSQL");
const {
    LPPAGINA
} = require("../Constantes/ConstantesDataBase/ConstantesPaginacion");
const Presenta = require("../servicios/Presenta");
const FyleSystem = require('../modelos/FileSystem');
const { URL, VERSION, NOPICTURE } = require('../Constantes/ConstantesRutas');
const uniqid = require('uniqid');

class ControladorBase {

    constructor(config) {
        this.config = config;
        this.connect = new Conexion();
        this.extension = '.jpg';
        this.fileSystem = new FyleSystem(config);
        this.uploadImage = this.uploadImage.bind(this);




        this.leerUno = this.leerUno.bind(this);
        this.leerSelect = this.leerSelect.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.sendDataToTable = this.sendDataToTable.bind(this);
        this.enviaDatos = this.enviaDatos.bind(this);
        this.leerCount = this.leerCount.bind(this);
        this.limite = LPPAGINA;
        this.getFoto = this.getFoto.bind(this);
        this.leerALL = this.leerALL.bind(this);
        this.hacerPost = this.hacerPost.bind(this);
        this.leerSelectDir = this.leerSelectDir.bind(this);


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
            this.procesaErr(res,objeto,status);
            
        }
    }

    obtenerFotoUrl(res, datos, status = null) {
        if (this.config.CARPETA) {
            const { CAMPO } = this.config.CARPETA;
            const { CARPETA } = this.config.CARPETA;
            const { campoId } = this.config;
            if (datos.length > 0) {

                let dat = datos.map(d => {
                    for (let k in d) {
                        if (k === CAMPO) {

                            // console.log('Datos=> ', d);
                            // console.log('Campo en el base=> ', k);
                            // console.log('Campo recogido => ',d[k])
                            if (d[k]) {
                                d[k] = `${URL}${VERSION}uploads/${CARPETA}/${d[campoId]}/${d[k]}`;
                            } else {
                                d[k] = `${URL}${VERSION}uploads/${NOPICTURE}`;
                            }
                            break;
                        }
                    }
                    return d;
                });
                this.enviaDatos(res, dat, status);
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
     * Lista datos del objeto indexado.
     * 
     * @param {} req : objeto request.
     * @param {} res : objeto response.
     */
    leerUno(req, res) {
        let id = req.params.id;
        if (id === "count") return this.leerCount(req, res);
        if (id.trim().length==0) return this.leerAll(req, res);
        let sql = this.config.QUERIES.SELECT_UNO.replace(':id', decodeUriComponent(id));
console.log(sql);
        this.connect.leerSql(sql.replace(/:TABLA/gi, this.config.TABLA))
            .then(dat => {
                this.obtenerFotoUrl(res, dat);

            })
            .catch(err => {
                this.procesaErr(res,"Error en Leer uno",err);
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
        this.leerSelectDir(req, res, sql)

    }
    leerSelectDir(req, res, sql) {
        const ids = req.session.userid;
        const role = req.session.role;
        sql = sql.replace(/:TABLA/gi, this.config.TABLA);
        sql = CompletaSQL.cSQL(req, sql);
        console.log(sql);
        this.connect.leerSql(sql)
            .then(dat => {
                //console.log("dat->", dat);
                this.enviaDatos(res, dat);
            })
            .catch(err => {
                this.procesaErr(res,"Error en leer SELECT",err);
            });
    }

    leerALL(req, res) {
        //console.log('leerAll0');
        let sql = this.config.QUERIES.SELECT_ALL.replace(/:TABLA/gi, this.config.TABLA);
        sql = CompletaSQL.cSQL(req, sql);
        //console.log('leerAll0',sql);
        this.connect.leerSql(sql)
            .then(dat => {
                this.obtenerFotoUrl(res, dat);
            })
            .catch(err => {
                this.procesaErr(res,"Error en leerAll",err);
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


        const file = null;

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
                this.procesaErr(res, 'Esta acción no es válida', 400);
                break;
        }
    }

    uploadImage(req, res) {
        console.log('Imagen: ', req.files);
        // this.fileSystem.guardarImagen(file, value.insertId, data[0][this.config.CARPETA.CAMPO])
        //                     .then(response => {
        //                         console.log('OK => ', response)
        //                         resolve({
        //                             Ok: true,
        //                             Data: 'Se ha modificado correctamente la tabla en la base de datos. ' + response
        //                         })
        //                     }).catch(err => {
        //                         console.log('Error=> ', err)
        //                         reject({
        //                             Ok: false,
        //                             Data: err,
        //                             Status: 500
        //                         })
        //                     });
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
            this.procesaErr(res, result.Data,result.Status);
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

        // const file = req.files[CAMPO];

        // if (!file) {
        //     return -1;
        // }


        // if (!file.mimetype.includes('image')) {
        //     return 0;
        // }
        console.log('Imagen: ', req.files)


        // return file;

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
                this.procesaErr(res, 'Lo que intenta subir no es una imagen', 400);
                break;
            case -1:
                this.procesaErr(res, 'Tienes un error en el nombre del campo, el nombre ha de ser: ' + CAMPO, 400);
                break;
            case -2:
                this.procesaErr(res, 'Es obligatorio subir subir una imagen', 400);
                break;
            default:
                this.sendDataToTable([body], QUERIES.INSERT, file)
                    .then(result => {

                        if (result.Ok) {
                            this.enviaDatos(res, result.Data);
                        } else {
                            this.procesaErr(res, result.Data, result.Status);
                        }
                    }).catch(err => {
                        this.procesaErr(res, err.Data, err);
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
                
                this.enviaDatos(res, result.Data);
            }).catch(err => {
               
                this.procesaErr(res, err.Data, err);
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
            this.procesaErr(res, 'Acción inválida', 403);
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
            data[0][this.config.CARPETA.CAMPO] = nombreUnico + this.extension;
        }

        const result = await new Promise((resolve, reject) => {
            this.connect.modifyTable(sql.replace(/:TABLA/gi, this.config.TABLA), data)
                .then(value => {
                    resolve({
                        Ok: true,
                        Data: 'Se ha modificado correctamente la tabla en la base de datos',
                        status: 500
                    })

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

    procesaErr(res,mensaje,err){
        console.log('mensaje---->', mensaje);
        console.log('error------>', err);
        let numero =  (!isNaN(err) && err >=200 && err <=600) ? err : 500
        res.status(numero)
                .send({
                    Ok: false,
                    Message: mensaje + err
                });
        throw new Error(err);
    }
}


module.exports = ControladorBase