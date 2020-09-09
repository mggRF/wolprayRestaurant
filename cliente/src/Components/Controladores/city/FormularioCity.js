import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import Desplegable from '../../Fragmentos/desplegable';

export default class FormularioCity extends Component {
    render() {
        let City = this.props.obj;
        let readonly = false;
        if (this.props.orden === 'D' || this.props.orden === 'V')
            readonly = true
        let title = '';
        switch (this.props.orden) {
            case 'I':
                title = 'añadir';
                break;
            case 'E':
                title = 'modificar';
                break;
            default:
                title = 'Información dela ciudad';
                break;
        }
        console.log("City=>", City);
        return (
            <div className="get_in_touch animate__animated animate__fadeIn">
                {
                    (!readonly) ?
                        (<h1 className="title">{'Formulario para ' + title}</h1>) :
                        (<h1 className="title">{title}</h1>)
                }
                <br />
                <div className="container">
                    <form className="formulario row" >


                        <><InputComponent
                            handleChange={this.props.funcion}
                            name="provinceid"
                            label="ID"
                            readOnly={true}
                            value={City.cityid.toString()}
                        /></>

                        <InputComponent
                            handleChange={this.props.funcion}
                            name="cityName"
                            label="Nombre"
                            readOnly={readonly}
                            value={City.cityName}
                        />
                        <InputComponent
                            handleChange={this.props.funcion}
                            name="latitude"
                            label="Latitud"
                            readOnly={readonly}
                            value={City.latitude}
                        />
                        <InputComponent
                            handleChange={this.props.funcion}
                            name="longitude"
                            label="Longitud"
                            readOnly={readonly}
                            value={City.longitude}
                        />

                        {
                            (!readonly) ?
                                (<Desplegable
                                    label='Estado:'
                                    readValue={this.props.funcion}
                                    table='c_procinces'
                                    value={City.provinceid}
                                    name='stateid'
                                />) : null
                        }
                    </form>
                </div>
            </div>
        )
    }
}

FormularioCity.defaultProps = {
    orden: "V"
}

FormularioCity.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}