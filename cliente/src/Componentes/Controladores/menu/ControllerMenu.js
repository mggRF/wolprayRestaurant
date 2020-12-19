
import Listado from './ListadoMenu';
import Formulario from './FormularioMenu';
import ControllerBase from '../ControllerBase';
import { checkUsuario } from '../../../Servicios/funcionesSeguridad';
import Menu from '../../../modelos/Menu';


export default class ControllerMenu extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'menu';
        this.ID = 'idMenu';
        this.LISTADO = Listado
        this.FORMULARIO = Formulario
        this.MODELO = new Menu();
        
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
       
    }

    

    
}