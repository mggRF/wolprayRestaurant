
import FormularioMenuPlatos from './FormularioMenuPlatos';
import ControllerBase from '../ControllerBase';
import { checkUsuario } from '../../../Servicios/funcionesSeguridad';
import Modelo from '../../../modelos/MenuPlatos';
import ListadoMenuPlatosDetalle from './ListadoMenuPlatosDetalle';

export default class ControllerMenuPlatos extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'menu_platos';
        this.ID = 'idmenu_platos';
        this.LISTADO = ListadoMenuPlatosDetalle
        this.FORMULARIO = FormularioMenuPlatos
        this.MODELO = new Modelo();
        this.DELAYED = props.delayed
            
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}