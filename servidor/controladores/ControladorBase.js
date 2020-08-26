
const Conexion = require("../servicios/Conexion");
class ControladorBase {


    constructor(config) {
        this.config = config;
        this.connect = new Conexion();

        this.listado = this.listado.bind(this);
        this.leerUno = this.leerUno.bind(this);
        this.leerSelect = this.leerSelect.bind(this);
        this.updateTable = this.updateTable.bind(this);
    }
    /**
     * Enviar datos a puesto //salida API
     * @param {} res : objeto response
     * @param {*} objeto  :datos a enviar o mensaje de error plano
     * @param {*} error  : En caso de error, objeto error
     *                      
     */
    static enviaDatos(res, objeto, error = null) {
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
                ControladorBase.enviaDatos(res, salida);

            })
            .catch(err => {
                console.error(err);
                ControladorBase.enviaDatos(res, "Error en lectura de tabla", err);

            });

    }

    leerUno(req, res) {
        let id = req.params.id;

        let sql = this.config.QUERIES.SELECT_UNO.replace(':id', id);
        
       
        this.connect.leerSql(sql)
            .then(dat => {
                ControladorBase.enviaDatos(res, dat);

            })
            .catch(err => {
                ControladorBase.enviaDatos(res, "Error en Leer uno", err);
                
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
                ControladorBase.enviaDatos(res, dat);
            })
            .catch(err => {
                ControladorBase.enviaDatos(res, "Error en leer SELECT", err);

            });

    }



    
    updateTable(req, res) {
        const method = req.route.stack[0].method;
        const id = req.params.id;
        const body = req.body;

        //Datos de la sesión
        const ids = req.session.userid;
        const role = req.session.role;
        const {QUERIES} = this.config;

        switch (method.toLowerCase()) {
            case 'post':
                ControladorBase.sendDataToTable([body], QUERIES.INSERT, res);
                break;
            case 'put':
                ControladorBase.sendDataToTable([body, id],QUERIES.UPDATE, res);
                break;
            case 'delete':
                ControladorBase.sendDataToTable([id], QUERIES.DELETE, res);
                break;
        }
    }
 

    static sendDataToTable(data, sql, res) {
        this.connect.modifyTable(sql, data)
            .then(value => {
                ControladorBase.enviaDatos(res, value);
            }).catch(err => ControladorBase.enviaDatos(res, 'Ha ocurrido un error al tratar de modificar la tabla', err));
    }
}


module.exports = ControladorBase