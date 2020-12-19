import { AUTORIZAR } from '../Componentes/Constantes'
import LoginScreen from './../Componentes/LoginComponent/LoginScreen'

export function checkUsuario(role) {
  let init = LoginScreen.datosLogin()

  if (role <= init.role) {
    return {
      id: init.id,
      role: init.role,
      token: init.token,
      tokemTda: init.tokemTda,
    }
  } else {
    //******************    window.history.back();    //solucion 1
    window.location.href = '/login/'
    return
  }
}

// function init() {
//     return JSON.parse(localStorage.getItem('user')) || { logged: false };
// }
