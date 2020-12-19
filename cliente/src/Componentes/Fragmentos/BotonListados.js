import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Llama a la rutina prevista, pasandole lo que haya recibido en 
 * tipo = normalmente I;D;M;V
 * id   = registro a recuperar
 * datosAux = cualquier objeto a traspasar al siguiente nivel
 */
export default class BotonListado extends Component {

    render() {
        //console.log("En boton, props=>",this.props)
        const clase = "btn " + this.props.clase;
        const icon = this.props.icon;
        return (
            <button type="button"
                className={clase + ' animate__animated animate__zoomIn'}
                onClick={() => this.props.funcion(this.props.tipo, this.props.id, this.props.datosAux)}
            >
                <i className = {icon}></i>
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