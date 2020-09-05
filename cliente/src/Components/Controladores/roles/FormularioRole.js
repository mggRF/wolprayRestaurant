import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormularioRole extends Component {
    render() {
        let role = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false

        return (
            <div className = "animate__animated animate__fadeIn">
                <label htmlFor="roleid">Id</label>
                <input name="roleid" 
                    value={role.roleid} 
                    onChange={this.props.funcion} 
                    readOnly="ON "/>
                <label htmlFor="roleName">Name</label>
                <input name="roleName" 
                    value={role.roleName} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
            </div>


        )
    }
}

FormularioRole.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}