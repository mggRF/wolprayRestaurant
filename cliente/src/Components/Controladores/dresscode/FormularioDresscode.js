import React, { Component } from 'react';
import PropTypes from 'prop-types';





export default class  FormularioDresscode extends Component {
    render() {
        let dresscode = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false

        return (
            <div className = "animate__animated animate__fadeIn">
                <label htmlFor="dressCodeId">Id</label>
                <input name="dressCodeId" 
                    value={dresscode.dressCodeId } 
                    onChange={this.props.funcion} 
                    readOnly="ON "/>
                <label htmlFor="dressCodeDescription">Description</label>
                <input name="dressCodeDescription" 
                    value={dresscode.dressCodeDescription} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
            </div>


        )
    }
}
FormularioDresscode.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}