import { API_URL, CONVERSOR } from '../Componentes/Constantes'

import LoginScreen from './../Componentes/LoginComponent/LoginScreen'

export default class AccesoAPI {
  static async leerDesplegables(tabla, precursor) {
    let url = API_URL + this.verificaTabla(tabla) + '/select/'
    if (!(precursor === undefined || precursor === 0)) url += precursor
    return this.accederApi(url)
  }

  static async leerUNO(tabla, id) {
    let url2 = this.verificaTabla(tabla)
    let url = API_URL + url2 + '/' + id
    return this.accederApi(url)
  }

  static async enviarTodo(tabla, metodo, datos, id = null) {
    let url2 = this.verificaTabla(tabla)
    let url = API_URL + url2

    if (datos['coverUrl']) {
      datos['coverUrl'] = null
    }
    switch (metodo) {
      case 'POST':
        return this.accederApi(url, metodo, datos)
      case 'PUT':
        url += '/' + id
        return this.accederApi(url, metodo, datos)
      case 'DELETE':
        url += '/' + id
        return this.accederApi(url, metodo, null)
      default:
        break
    }
  }

  static async enviarImagen(url, file, campo) {
    const cabeceras = new Headers()
    cabeceras.append('Authorization', 'Bearer my-token')
    cabeceras.append('Cache-Control', 'no-cache')

    const formData = new FormData()

    formData.append(campo, file)

    let opciones = {
      // opciones para GET y DELETE (no hay body)
      method: 'POST',
      headers: cabeceras,
    }
    if (file !== null) {
      opciones = {
        // opciones para resto, con datos
        method: 'POST',
        headers: cabeceras,
        body: formData,
      }
    }

    return await fetch(url, opciones)
      .then((res) => res.json())
      .then((results) => {
        return results
      })
  }

  /**
   * Verifica si el usuario existe en la base de datos.
   *
   * @param {*} accion acción solicitada
   * @param {*} datos datos para verificar
   */
  static async verificaUsuario(accion, datos) {
    let url = API_URL + this.verificaTabla(accion)

    switch (accion) {
      case 'LOGIN':
        return this.accederApi(url, 'PUT', datos)
      case 'LOGOUT':
        console.log('en api LOGOUT', accion, url)
        return this.accederApi(url, 'PUT', datos)
      default:
        break
    }
  }
  /*
   *  Metodo de acceso a la API. Comun......
   */
  static async accederApi(url, metodo = 'GET', datos = null) {
    let user = LoginScreen.datosLogin()
    const cabeceras = new Headers()
    cabeceras.append('Content-Type', 'application/json')
    cabeceras.append('Authorization', 'Bearer ' + user.token)
    cabeceras.append('Cache-Control', 'no-cache')
    cabeceras.append('WPRA_Tienda', user.tokemTda)
    let opciones = {
      // opciones para GET y DELETE (no hay body)
      method: metodo,
      headers: cabeceras,
    }
    if (datos !== null) {
      opciones = {
        // opciones para resto, con datos
        method: metodo,
        headers: cabeceras,
        body: JSON.stringify(datos),
      }
    }
    console.log('AccesoApi', url)
    return await fetch(url, opciones)
      .then((res) => res.json())
      .then((results) => {
        console.log('results', results)
        if (results.Message) {
          console.log('results.Message', results.Message)
          if (results.Message.indexOf('TokenExpiredError') > 0) {
            localStorage.clear()
          }
        }
        return results
      })
  }

  static verificaTabla(tabla) {
    let url2 = CONVERSOR[tabla]
    if (url2 === null || url2 === undefined) {
      return tabla
    } else {
      return url2
    }
  }
}
