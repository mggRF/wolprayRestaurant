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
        console.log("count0>", sql)
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
                this.sendDataToTable([id], QUERIES.DELETE, res);
                break;
        }
    }

    hacerPost(req, res) {
        const body = req.body;

        const { CAMPO } = this.config.CARPETA;
        console.log('El campo es: ', CAMPO)


        //Datos de la sesión
        const ids = req.session.userid;
        const role = req.session.role;
        const { QUERIES } = this.config;

        if (!req.files) {
            return res.status(400).json({
                ok: false,
                Message: 'Es obligatorio subir subir una imagen'
            });
        }

        const file = req.files[CAMPO];

        if (!file) {
            return res.status(400).json({
                ok: false,
                Message: 'Tienes un error en el nombre del campo, el nombre ha de ser: ' + CAMPO
            });
        }

        if (!file.mimetype.includes('image')) {
            return res.status(400).json({
                ok: false,
                Message: 'Lo que intenta subir no es una imagen'
            });
        }



        req.body[CAMPO] = this.config.CARPETA.nombreFoto;

        this.sendDataToTable([body], QUERIES.INSERT, req, res)
            .then(value => {
                if (value.insertId) {
                    console.log('Se han guardado los datos, el id es: ', value.insertId)
                    this.recogerImagen(req, value.insertId)
                        .then(response => {
                            this.enviaDatos(res, 'Se han añadido correctamente los datos.');
                        }).catch(err => this.enviaDatos(res, 'Ha ocurrido un error al tratar de subir la imagen', err));
                }
            }).catch(err => this.enviaDatos(res, 'Ha ocurrido un error al tratar de añadir los datos', err));
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

        if (req.files) {
            file = req.files[CAMPO];
            if (!file) {
                return res.status(400).json({
                    ok: false,
                    Message: 'Tienes un error en el nombre del campo, el nombre ha de ser: ' + this.config.CARPETA.CAMPO
                });
            }
        }
        if (file) {

            await this.recogerImagen(req, id);

        }



        this.sendDataToTable([body, id], QUERIES.UPDATE)
            .then(value => {
                this.enviaDatos(res, value);
            }).catch(err => this.enviaDatos(res, 'Ha ocurrido un error al tratar de modificar la tabla', err));
    }

    async recogerImagen(req, id) {
        console.log('El id desde recoger imagen es: ', id)

        const { CAMPO } = this.config.CARPETA;
        const file = req.files[CAMPO];


        return await this.fileSystem.guardarImagenTemporal(file, id);

    }


    async sendDataToTable(data, sql) {
        return await this.connect.modifyTable(sql, data);
    }
}


module.exports = ControladorBase