import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormularioUsers extends Component {
    render() {
        let user = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false
            console.log("Desde formulario users esta es la fecha", user.birthdate.split('T')[0])
        return (
            <div>
                <label htmlFor="userid">Id</label>
                <input name="userid" 
                    value={user.userid} 
                    onChange={this.props.funcion} 
                    readOnly="ON "/>
                <label htmlFor="userName">Name</label>
                <input name="userName" 
                    value={user.userName} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />

                <label htmlFor="mail">Mail</label>
                <input name="mail" 
                    value={user.mail} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />

                <label htmlFor="userPhone">Phone</label>
                <input name="userPhone" 
                    value={user.userPhone} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
                <label htmlFor="birthdate">Birthdate</label>
                <input name="birthdate"
                    type ="date" 
                    value={user.birthdate.split('T')[0]}
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
                <label htmlFor="roleid">Role id: </label>
                <input name="roleid" 
                    value={user.roleid} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
            </div>


        )
    }
}

FormularioUsers.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}