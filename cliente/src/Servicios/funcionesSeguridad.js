
import LoginScreen from './../Componentes/LoginComponent/LoginScreen'
 

export function checkUsuario(role) {
  let init = LoginScreen.datosLogin()
  if (init === null) {
    return init
  } else {
    if (role <= init.role) {
      return init
    } else {
      window.history.back();    //solucion 1
    
      return "Not Logon"
    }
  }
}

// function init() {
//     return JSON.parse(localStorage.getItem('user')) || { logged: false };
// }
