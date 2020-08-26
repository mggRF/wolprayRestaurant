import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormularioMusic from './FormularioMusic'




export default class CtrlFormularioMusic extends Component {

    constructor(props){
        super(props);
        this.recogeDatos = this.recogeDatos.bind(this);
        this.enSubmit = this.enSubmit.bind(this);
    }
    enSubmit() {
        this.props.trabajo(this.state);
    }

    recogeDatos = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount(){
        this.setState(this.props.obj);
    }

    render() {
        
        return (
            <>
                <FormularioMusic orden={this.props.orden} obj={this.props.obj} funcion={this.recogeDatos} />
                <button type="button"
                    className="btn btn-dark"
                    onClick={this.enSubmit}
                >
                Aceptar
                </button>
        
            </>
            )
    }
}

CtrlFormularioMusic.propTypes = {
                    orden:PropTypes.oneOf(['D','V','E','I']).isRequired,
    obj:PropTypes.object,
    trabajo:PropTypes.func
}