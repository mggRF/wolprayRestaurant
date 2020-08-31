import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL, COMPANIES } from '../../Constantes';




export default class  FormularioCompanies extends Component {
    
    render() {
        let company = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false

        return (
            <div>
                <label htmlFor="companyid">Id</label>
                <input name="companyid" 
                    value={company.companyid } 
                    onChange={this.props.funcion} 
                    readOnly="ON"/>
                <label htmlFor="companyName">Name</label>
                <input name="companyName" 
                    value={company.companyName} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
            </div>


        )
    }
}

FormularioCompanies.defaultProps = {
    orden: "V"
}

FormularioCompanies.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}