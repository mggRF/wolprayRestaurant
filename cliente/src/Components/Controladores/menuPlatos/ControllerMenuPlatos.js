
import ListadoMenuPlatos from './ListadoMenuPlatos';

import FormularioMenuPlatos from './FormularioMenuPlatos';
import ControllerBase from '../ControllerBase';
import { checkUsuario } from '../../../Servicios/funcionesSeguridad';
import Modelo from '../../../modelos/MenuPlatos';

export default class ControllerMenuPlatos extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'menu_platos';
        this.ID = 'idmenu_platos';
        this.LISTADO = ListadoMenuPlatos
        this.FORMULARIO = FormularioMenuPlatos
        this.MODELO = new Modelo();
            
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}