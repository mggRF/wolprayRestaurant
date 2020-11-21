
import { FormularioLocal } from './FormularioLocal';
import ControllerBase from '../ControllerBase';
import { checkUsuario } from '../../../Servicios/funcionesSeguridad';
import ListadoLocals from './ListadoLocal';
import Local from '../../../modelos/Locals';
import { LOCALS } from '../../Constantes';




export default class ControllerLocal extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = LOCALS;
        this.ID = 'idLocal';
        this.LISTADO = ListadoLocals;
        this.FORMULARIO = FormularioLocal
        let model = new Local()
        model.stateId="";
        model.provinceId="";

        this.MODELO =  new Local();
        
     
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }


}