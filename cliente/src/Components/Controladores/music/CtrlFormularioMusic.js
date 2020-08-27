import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormularioMusic from './FormularioMusic'
import { LETRERO_BOTON } from '../../Constantes';




export default class CtrlFormularioMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: this.props.obj
        };
        this.recogeDatos = this.recogeDatos.bind(this);
        this.enSubmit = this.enSubmit.bind(this);
    }
    enSubmit() {
        this.props.trabajo(this.state.obj);
    }

    recogeDatos = (e) => {
        console.log(e.target.name)
        let obj = this.state.obj;
        obj[e.target.name] = e.target.value
        this.setState({ obj: obj })
        // this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount() {
        this.setState(this.props.obj);
    }

    render() {

        return (
            <>
                <FormularioMusic orden={this.props.orden} obj={this.state.obj} funcion={this.recogeDatos} />
                <button type="button"
                    className="btn btn-dark"
                    onClick={this.enSubmit}
                >
                    {LETRERO_BOTON[this.props.orden]}
                </button>

            </>
        )
    }
}

CtrlFormularioMusic.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    trabajo: PropTypes.func
}