/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Slot");
const {QueriesSlot} = require("../queries/QueriesSlot");
const TABLA = 'slots';


class ControladorSlot extends ControladorBase {
    constructor(){
        let config = {
            TABLA:TABLA,
            QUERIES: QueriesSlot,
            MODELO:MODELO,
            campoId: 'slotid ',
        }
        super(config);
        this.findByMonth = this.findByMonth.bind(this);
    }

    

    findByMonth(req, res){
        let clubid =req.params.id;
        let ano = req.params.ano;
        let mes =  req.params.mes;
        let sql = QueriesSlot.SELECT_MES_CLUB.replace(':id', clubid).replace(':ano',ano).replace(':mes',mes);
        
        console.log("este es el sql", sql.replace(/:TABLA/gi, TABLA) );

        this.connect.leerSql(sql.replace(/:TABLA/gi,TABLA))
            .then(dat => {
                //console.log("dat->", dat);
                this.enviaDatos(res, dat);
            })
            .catch(err => {
                this.enviaDatos(res, "Error en leer SELECT", err);

            });
    }
    

    
}

// const ccaa = new ControladorCCAA()
// ccaa.listado()



module.exports = ControladorSlot;