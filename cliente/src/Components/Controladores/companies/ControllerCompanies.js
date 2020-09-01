import Formulario from './FormularioCompanies';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoCompanies from './ListadoCompanies';




export default class  ControllerCompanies extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'companies';
        this.ID = 'companyid';
        this.LISTADO = ListadoCompanies;
        this.FORMULARIO = Formulario;
        this.MODELO = {
            companyid:0,
            companyName:"",
            companyAddress:"",
            cityid: 0,
            company_CIF:"",
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}