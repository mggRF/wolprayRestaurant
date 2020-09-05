import React, { Component }  from 'react';
import ButtonComponent from '../Comun/buttonComponent/ButtonComponent';
import themeLogo from '../Comun/images/logowolpray.png';
import './login.css';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: null,
            admin: false,
            manager: false
        }
        console.log("DESDE LOGINSCREEN");
        console.log(this.state.password);
    }

    onSubmitInput = (e) => {
        e.preventDefault();
        this.props.history.replace('/');
    }

    handleInputChange = ({ target }) => {
        this.setState(
            {
                ...this.state,
                [target.name]: target.value
            }
        );
        console.log("DESDE handleInputChange")
        console.log(this.state)
    }

    render() {
        const { email, password } = this.state;

        return (<>

            <form className="login-bx mt-5" onSubmit={this.onSubmitInput}>
                <h1>Login</h1>
                <div className="bximg">
                    <img src={themeLogo} />
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
                    ¿Aún no eres parte de nosotros? <a href="#">¡Contáctanos!</a>
                </div>
            </form>


            {/* <PieDePagina /> */}
        </>);
    }
}