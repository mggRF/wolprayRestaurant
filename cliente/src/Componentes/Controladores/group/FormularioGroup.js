import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import DesplegableAut from './../../Fragmentos/DesplegableAut';




export default class FormularioGroup extends Component {
    render() {
        let datGrupo = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Identificador Grupo</h1>
                <div className="container">
                    <form className="formulario row">
                        {
                            (datGrupo.idGrupo) ?
                                <InputComponent name="idGrupo"
                                    handleChange={this.props.funcion}
                                    label="ID"
                                    readOnly={true}
                                    value={datGrupo.idGrupo} /> : null
                        }
                        
                        <DesplegableAut
                            name='idLocal'
                            table='locals'
                            label='Nombre local'
                            readValue={this.props.funcion}
                            idvalue={datGrupo.idLocal}
                            value={datGrupo.locName}
                            readOnly={readonly}
                            orden = {this.props.orden}
                        /> 
                    

                        <InputComponent name="grupName"
                            handleChange={this.props.funcion}
                            label="Texto"
                            readOnly={readonly}
                            value={datGrupo.grupName}
                        />

                        <InputComponent
                            type='textarea'
                            name="grupDescription"
                            handleChange={this.props.funcion}
                            label="Descripcion"
                            readOnly={readonly}
                            value={datGrupo.grupDescription}
                        />
                    </form>
                </div>
            </section>


        )
    }
}
FormularioGroup.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}