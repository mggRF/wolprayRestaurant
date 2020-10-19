import Formulario from './FormularioCity';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoCity from './ListadoCity';

export default class ControllerCity extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'c_city';
        this.ID = 'cityid';
        this.LISTADO = ListadoCity;
        this.FORMULARIO = Formulario;
        this.MODELO = {
            cityid:0,
            provinceid:"",
            cityName:0,
            latitude: 0,
            longitude: 0,
            city_limit_por:0,
            city_limit_mess:""
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }
}
 