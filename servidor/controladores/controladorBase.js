
const Conexion = require("../servicios/Conexion");
const conect = new Conexion();
class ControladorBase {
    

    constructor(config){
        this.config = config;
        console.log('Constructor',config);
        this.listado = this.listado.bind(this);
        this.leerUno = this.leerUno.bind(this);
        this.leerSelect = this.leerSelect.bind(this);
    }

    static enviaDatos(objeto, ok) {
        let respuesta;
        return respuesta = {
            Respuesta: ok,
            Datos: objeto
        };
    }

    listado(req, res) {
        console.log("listado",this.config.TABLA);
        let salida = [];
        
        conect.leerTabla(this.config.TABLA)
            .then(dat => {
                dat.forEach(row => {
                    let ca = new this.config.MODELO(row);
                    salida.push(ca);
                })
                salida=ControladorBase.enviaDatos(salida,true);
                res.json(salida);
            })
            .catch(err => {
                console.log(err);
                salida=ControladorBase.enviaDatos(err,false);
                res.json(salida);
            });

    }

    leerUno(req,res){
        let id = req.params.id;
        let sql = this.config.SELECT_UNO.replace(':id',id);
        conect.leerSql(sql)
        .then(dat => {
            let salida=ControladorBase.enviaDatos(dat,true);
            res.json(salida);
        })
        .catch(err => {
            let salida=ControladorBase.enviaDatos(err,false);
            res.json(salida);
        });

    }

    leerSelect(req,res){
        let id = req.params.id;
        let sql = this.config.SELECT_SELECT.replace(':id',id);
        conect.leerSql(sql)
        .then(dat => {
            let salida=ControladorBase.enviaDatos(dat,true);
            res.json(salida);
        })
        .catch(err => {
            let salida=ControladorBase.enviaDatos(err,false);
            res.json(salida);
        });

    }
}


module.exports = ControladorBase