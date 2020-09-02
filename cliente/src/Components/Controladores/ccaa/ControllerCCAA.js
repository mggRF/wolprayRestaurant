import Formulario from './FormularioCCAA';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoCCAA from './ListadoCCAA';




export default class  ControllerCCAA extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'c_state';
        this.ID = 'stateid';
        this.LISTADO = ListadoCCAA;
        this.FORMULARIO = Formulario;
        this.MODELO = {
            stateid:0,
            stateName:"",
            countryid:0
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}