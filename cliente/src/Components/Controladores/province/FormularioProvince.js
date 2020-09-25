import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import Desplegable from '../../Fragmentos/desplegable';

export default class FormularioProvince extends Component {


    render() {
        let Province = this.props.obj;
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
                title = 'Información sobre el estado';
                break;
        }
       
        
        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
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
                            value={Province.provinceid.toString()}
                        /></>

                        <InputComponent
                            handleChange={this.props.funcion}
                            name="provinceName"
                            label="Nombre"
                            readOnly={readonly}
                            value={Province.provinceName}
                        />

                        {
                            (readonly) ?
                                (<InputComponent
                                    handleChange={this.props.funcion}
                                    namecountryName
                                    label="Estado"
                                    readOnly={readonly}
                                    value={Province.provinceCapital}
                                />) : <Desplegable
                                    depend='209'
                                    label='Estado:'
                                    readValue={this.props.funcion}
                                    table='c_state'
                                    value={Province.stateid}
                                    name='stateid'
                                />
                        }
                    </form>
                </div>
            </section>
        )
    }
}

FormularioProvince.defaultProps = {
    orden: "V"
}

FormularioProvince.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}