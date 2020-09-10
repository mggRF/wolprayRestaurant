import React, { Component }  from 'react';
import ButtonComponent from '../Comun/buttonComponent/ButtonComponent';
import AccesoAPI from '../../Servicios/AccesoAPI';
import themeLogo from '../Comun/images/logowolpray.png';
import './login.css';
import { Link} from "react-router-dom";
import { checkUsuario } from '../../Servicios/funcionesSeguridad';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.TABLA = 'LOGIN';
    }

    onSubmitInput = (e) => {
        e.preventDefault();
        console.log('State: ',this.state);
        AccesoAPI.verificaUsuario(this.TABLA,this.state)
            .then(response => {
                console.log('Respuesta: ', response);
                if(response.Ok){
                    localStorage.setItem('user', response.Datos);
                    console.log('Check usuario: ', checkUsuario);
                }

                 this.props.history.push('/');
            }).catch(err => console.log('Error: ', err));
    }

    handleInputChange = ({ target }) => {
        this.setState(
            {
                ...this.state,
                [target.name]: target.value
            }
        );
    }

    render() {
        const { email, password } = this.state;

        return (<>

            <form className="login-bx mt-5 animate__animated animate__fadeIn" onSubmit={this.onSubmitInput}>
                <h1>Login</h1>
                <div className="bximg animate__animated animate__jackInTheBox">
                    <img src={themeLogo} alt = 'Logo' />
                </div>

                <div className="txtb">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                        autoComplete="off"
                    />
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
                    ¿Has olvidado tu contraseña? <Link to = '/register'>¡Contáctanos!</Link>
                </div>
            </form>
            


            {/* <PieDePagina /> */}
        </>);
    }
}