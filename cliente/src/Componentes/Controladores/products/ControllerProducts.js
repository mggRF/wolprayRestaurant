
import FormularioProducts from './FormularioProducts';
import ControllerBase from '../ControllerBase';
import { checkUsuario } from '../../../Servicios/funcionesSeguridad';
import ListadoProducts from './ListadoProducts';
import Modelo from '../../../modelos/Products'

export default class ControllerEvents  extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'products';
        this.ID = 'idProduct';
        this.LISTADO = ListadoProducts
        this.FORMULARIO = FormularioProducts
        this.MODELO = new Modelo() 
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
       
    }
    
}

