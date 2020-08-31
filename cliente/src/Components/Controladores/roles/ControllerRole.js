
import ListadoRole from './ListadoRole';

import FormularioRole from './FormularioRole';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';


export default class ControllerRole extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'roles';
        this.ID = 'roleid';
        this.LISTADO = ListadoRole
        this.FORMULARIO = FormularioRole
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}