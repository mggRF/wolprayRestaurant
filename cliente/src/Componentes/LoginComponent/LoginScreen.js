import React, { Component } from 'react'
import ButtonComponent from '../Comun/buttonComponent/ButtonComponent'
import AccesoAPI from '../../Servicios/AccesoAPI'
import themeLogo from '../Comun/images/Gastromundo-1-1024x875.png'
import './login.css'
import { Link } from 'react-router-dom'
import { Alerts } from '../Fragmentos/Alerts'
import { AUTORIZAR} from '../Constantes'

const INICIAL = {
  NotLogged: true
}

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.TABLA = 'LOGIN'
  }

  onSubmitInput = (e) => {
    e.preventDefault()
    AccesoAPI.verificaUsuario(this.TABLA, this.state)
      .then((response) => {

        if (response.Ok) {
          let user = {
            id: response.Datos.id,
            role: response.Datos.role,
            token: response.Datos.token,
            tokemTda: response.Datos.tokemTda,
            userName: response.Datos.userName,
            local:response.Datos.local
          }
          localStorage.setItem('userWPR_TDA', JSON.stringify(user))

          window.location.href = '/interno'
        } else {
          Alerts.errorMessage(response.Message)
        }
      })
      .catch((err) => console.log('Error: ', err))
  }
  static initLogin() {
    return INICIAL
  }
  static  datosLogin() {
    let datos=localStorage.getItem('userWPR_TDA')
    let init =  JSON.parse( datos) 
    if (!AUTORIZAR) {
      init.role = 9
      init.id = ''
      init.token = ''
      init.tokemTda = 'abcdefghijklmnopqrstuvxz1234567890ABCDEFGHIJKLMNOP'
      init.userName = "Pruebas"
      init.local = "pruebas/Barconfinao)"
    }
    return init
  }


  handleInputChange = ({ target }) => {
    this.setState({
      ...this.state,
      [target.name]: target.value,
    })
  }

  render() {
    const { email, password } = this.state

    return (
      <>
        <form className="login-bx mt-5 animate__animated animate__fadeIn" onSubmit={this.onSubmitInput}>
          <h1>Login</h1>
          <div className="bximg animate__animated animate__jackInTheBox">
            <img src={themeLogo} alt="Logo" />
          </div>

          <div className="txtb">
            <input type="email" name="email" value={email} onChange={this.handleInputChange} autoComplete="off" />
            <span placeholder="Correo electrónico"></span>
          </div>

          <div className="txtb">
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              autoComplete="off"
            />
            <span placeholder="Contraseña"></span>
          </div>

          <div onClick={this.onSubmitInput}>
            <ButtonComponent text="Iniciar sesion" />
          </div>

          <div className="bottom-text">
            ¿Has olvidado tu contraseña? <Link to="/register">¡Contáctanos!</Link>
          </div>
        </form>

        {/* <PieDePagina /> */}
      </>
    )
  }
}
