
import FormularioClub from './FormularioClub';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoClubs from './ListadoClubs';




export default class  ControllerClub extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'clubs';
        this.ID = 'clubid';
        this.LISTADO = ListadoClubs
        this.FORMULARIO = FormularioClub
        this.MODELO ={
         musicsUpdate:"",
         clubid : "",
         clubName : "",
         streetName : "",
         streetNumber : 0,
         postal_code : "",
         cityid : "",
         description : "",
         clubPhone : "",
         dressCodeid : "",
         coverUrl : "",
         latitude : "",
         longitude : "",
         howToGetThere : "",
         entryCost : "",
         openSeason1 : "",
         closingSeason1 : "",
         openSeason2 : "",
         closingSeason2 : "",
         openSeason3 : "",
         closingSeason3 : "",
         accessAge : "",
         DiasAnticipacion : "",
         companyid : "",
         maxPeople : "",
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}