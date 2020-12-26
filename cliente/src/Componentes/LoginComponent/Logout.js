import { Component } from 'react'
import AccesoAPI from '../../Servicios/AccesoAPI'
import './login.css'
import { Alerts } from '../Fragmentos/Alerts'

export default class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.TABLA = 'LOGIN'
  }

  static logout = () => {
    AccesoAPI.verificaUsuario('LOGOUT', { email: '', password: '' })
      .then((response) => {
        if (response.Ok) {
          localStorage.clear()
          window.location.href = '/'
          console.log('Ha ido bien')

        } else {
          Alerts.errorMessage(response.Message)
        }
      })
      .catch((err) => console.log('Error: ', err))
  }

  render() {
    console.log('Cerrando')
    return Logout.logout()
  }
}
