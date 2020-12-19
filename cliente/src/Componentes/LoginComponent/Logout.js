import React, { Component } from 'react'
import AccesoAPI from '../../Servicios/AccesoAPI'
import themeLogo from '../Comun/images/Gastromundo-1-1024x875.png'
import './login.css'
import { Link, Redirect } from 'react-router-dom'
import { Alerts } from '../Fragmentos/Alerts'
import { AUTORIZAR } from '../Constantes'

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
