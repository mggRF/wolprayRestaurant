import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BotonListado extends Component {

    render(){
        return(
            <button type="button"
        className="btn {this.props.clase}"
        onClick={()=>this.props.funcion(this.props.tipo,this.props.id)}
    >
        {this.props.children}
        </button>
    
        )
    }
}
BotonListado.propTypes= {
    funcion: PropTypes.func.isRequired,
    clase:PropTypes.string,
    tipo:PropTypes.oneOf(['D','V','E','I']).isRequired,
    id:PropTypes.number.isRequired
}