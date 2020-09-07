import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BotonListado extends Component {

    render() {
        //console.log("En boton, props=>",this.props)
        const clase = "btn " + this.props.clase;
        return (
            <button type="button"
                className={clase + ' animate__animated animate__zoomIn'}
                onClick={() => this.props.funcion(this.props.tipo, this.props.id)}
            >
                {this.props.children}
            </button>

        )
    }
}
BotonListado.propTypes = {
    funcion: PropTypes.func.isRequired,
    clase: PropTypes.string,
    tipo: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    id: PropTypes.number.isRequired
}