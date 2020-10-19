import Formulario from './FormularioProvince';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoProvince from './ListadoProvince';

export default class ControllerProvince extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'c_provinces';
        this.ID = 'provinceid';
        this.LISTADO = ListadoProvince;
        this.FORMULARIO = Formulario;
        this.MODELO = {
            provinceid:0,
            provinceName:"",
            stateid:0,
            provinceCapital: "",
            province_limit_por:0,
            province_limit_mess:""
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }
    
}