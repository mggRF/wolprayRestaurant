import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import DesplegableAut from './../../Fragmentos/DesplegableAut';






export default class FormularioLocalCity extends Component {
    render() {
        let objLocalCity = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false;

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Zonas</h1>
                <div className="container">
                    <form className="formulario row">
                        <div className="container">
                        </div>
                        {
                            (objLocalCity.idLocalCity) ?
                                <InputComponent name="idLocalCity"
                                    handleChange={this.props.funcion}

                                    label="ID"
                                    readOnly={true}
                                    value={objLocalCity.idLocalCity} /> : null
                        }


                        <DesplegableAut
                            name='idCity'
                            table='c_city'
                            label='Ciudad'
                            readValue={this.props.funcion}
                            idvalue={objLocalCity.idCity}
                            value={objLocalCity.cityName}
                            readOnly={readonly}
                            orden={this.props.orden}
                        />

                        <DesplegableAut
                            name='idLocal'
                            table='locals'
                            label='Local'
                            readValue={this.props.funcion}
                            idvalue={objLocalCity.idLocal}
                            value={objLocalCity.locName}
                            readOnly={readonly}
                            orden={this.props.orden}
                        />

                        <InputComponent name="lcName"
                            handleChange={this.props.funcion}
                            type='textarea'
                            label="Detalle ubicacion"
                            readOnly={readonly}
                            value={objLocalCity.lcName} />

                        

                    </form>
                </div>
            </section>


        )

    }
}
    FormularioLocalCity.propTypes = {
        orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
        obj: PropTypes.object,
        funcion: PropTypes.func
    }