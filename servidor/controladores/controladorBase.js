
const Conexion = require("../servicios/Conexion");
const conect = new Conexion();
class ControladorBase {


    constructor(config) {
        this.config = config;

        this.listado = this.listado.bind(this);
        this.leerUno = this.leerUno.bind(this);
        this.leerSelect = this.leerSelect.bind(this);
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
        console.log("listado", this.config.TABLA);
        let salida = [];

        conect.leerTabla(this.config.TABLA)
            .then(dat => {
                dat.forEach(row => {
                    let ca = new this.config.MODELO(row);
                    salida.push(ca);
                })
                ControladorBase.enviaDatos(res, salida);

            })
            .catch(err => {
                console.log(err);
                ControladorBase.enviaDatos(res, "Error en lectura de tabla", err);

            });

    }

    leerUno(req, res) {
        let id = req.params.id;
        let sql = this.config.SELECT_UNO.replace(':id', id);
        conect.leerSql(sql)
            .then(dat => {
                ControladorBase.enviaDatos(res, dat);

            })
            .catch(err => {
                ControladorBase.enviaDatos(res, "Error en Leer uno", err);
                
            });

    }

    leerSelect(req, res) {
        let id = req.params.id;
        let sql = this.config.SELECT_SELECT.replace(':id', id);


        conect.leerSql(sql)
            .then(dat => {
                console.log("dat->", dat);
                ControladorBase.enviaDatos(res, dat);
            })
            .catch(err => {
                ControladorBase.enviaDatos(res, "Error en leer SELECT", err);

            });

    }
}


module.exports = ControladorBase