
import FormularioClub from './FormularioClub';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoClubs from './ListadoClubs';




export default class  ControllerClub extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'clubs';
        this.ID = 'clubid';
        this.LISTADO = ListadoClubs;
        this.campoFoto = 'coverUrl';
        this.urlPost = 'http://localhost:3800/api_v00/clubs/image/';
        this.FORMULARIO = FormularioClub
        this.MODELO ={
         clubid : 600,
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