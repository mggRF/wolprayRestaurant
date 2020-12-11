API Wolpray

************************************** comunidades/states
/api_v00/states/                  // Listado de tabla 
/api_v00/states/:id               // Listado de un elemento   
/api_v00/states/select/:id        // listado de todas las comunidades de un pais (:id)

*************************************** paises(country)
/api_v00/countrys                 // Listado de tabla 
/api_v00/countrys/:id               // Listado de un elemento   


*************************************** Provincias(provinces)
/api_v00/provinces                // Listado de tabla 
/api_v00/provinces/:id               // Listado de un elemento   
/api_v00/provinces/select/:id        // listado de todas las provincias de una comunidad (:id)

*************************************** Poblaciones/city
/api_v00/citys                    // Listado de tabla 
/api_v00/citys/:id               // Listado de un elemento   
/api_v00/citys/select/:id        // listado de todas las poblaciones de una provincia (:id)



**************************************************************************
<!-- Controller cliente.
************************importaciones
import Listado from './ListadoMenu';
import Formulario from './FormularioMenu';
import ControllerBase from '../ControllerBase';
import Menu from '../../../modelos/Menu';
import { checkUsuario } from '../../../Servicios/funcionesSeguridad';
*************************En constructor
export default class ControllerXXX extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'menu';         Nombre de la tabla que hace referencia
        this.ID = 'idMenu';          Nombre de la Primary kay
        this.LISTADO = Listado       Componente para listado (importado)
        this.FORMULARIO = Formulario Componente para formulario, importado
        this.MODELO = new Menu();    Clase que define la tabla

Podemos incorporar los state que deseemos, con la salvedad del de seguridad que es obligatorio
    this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)      <----------- Nivel para autorizado
         -->