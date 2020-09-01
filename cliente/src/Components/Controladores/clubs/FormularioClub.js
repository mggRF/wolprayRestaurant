import React, { Component } from 'react';
import PropTypes from 'prop-types';





export default class  FormularioClub extends Component {
    render() {
        let club = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false

        return (
            <div>
                <label htmlFor="clubid">Id</label>
                <input name="clubid" 
                    value={club.clubid } 
                    onChange={this.props.funcion} 
                    readOnly="ON"/>
                <label htmlFor="clubName">Name</label>
                <input name="clubName" 
                    value={club.clubName} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
            </div>


        )
    }
    
}
FormularioClub.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}