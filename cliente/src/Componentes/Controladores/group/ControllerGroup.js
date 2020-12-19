import FormularioGrupo from './FormularioGroup'
import ControllerBase from '../ControllerBase'
import { checkUsuario } from '../../../Servicios/funcionesSeguridad'
import ListadoGrupo from './ListadoGroup'
import Modelo from '../../../modelos/NGrupos'

export default class ControllerGrupo extends ControllerBase {
  constructor(props) {
    super(props)
    this.TABLA = 'grupos'
    this.ID = 'idGrupo'
    this.LISTADO = ListadoGrupo
    this.FORMULARIO = FormularioGrupo
    this.MODELO = Modelo
    this.state = {
      estadoActualizacion: 0,
      orden: '',
      id: '',
      estadoUsuario: checkUsuario(9),
    }
  }
}
