import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextAreaComponent } from '../../Fragmentos/TextAreaComponent';
import { InputComponent } from '../../Fragmentos/InputComponent';

export default class FormularioRole extends Component {
    render() {
        let role = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false

        return (
            <div className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Rol</h1>
                <label htmlFor="roleid">Id</label>
                <div className="container">
                    <form className="formulario row">
                        {
                            (role.roleid) ?
                                <InputComponent name="musicid"
                                    handleChange={this.props.funcion}

                                    label="ID"
                                    readOnly={true}
                                    value={role.roleid} /> : null
                        }
                        <InputComponent name="roleName"
                            handleChange={this.props.funcion}
                            label="Nombre"
                            readOnly={readonly}
                            value={role.roleName}
                        />
                        <TextAreaComponent name="roleDescription"
                            handleChange={this.props.funcion}
                            label="Descripción"
                            readOnly={readonly}
                            value={role.roleDescription}
                        />
                    </form>
                </div>
            </div>


        )
    }
}

FormularioRole.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}