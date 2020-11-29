
import FormularioLocalCity from './FormularioLocalCity';
import ControllerBase from '../ControllerBase';
import { checkUsuario } from '../../../Servicios/funcionesSeguridad';
import ListadoLocalCity from './ListadoLocalCity';
import Modelo from '../../../modelos/NLocalCity'

export default class ControllerEvents  extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'localCity';
        this.ID = 'idLocalCity';
        this.LISTADO = ListadoLocalCity
        this.FORMULARIO = FormularioLocalCity
        this.MODELO = new Modelo() 
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
       
    }
    
}

