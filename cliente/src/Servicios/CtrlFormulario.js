import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LETRERO_BOTON } from '../Components/Constantes';





export default class CtrlFormulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: this.props.obj
        };
    }
    enSubmit= () => {
        this.props.trabajo(this.state.obj);
    }
    enCancel = () => {
        this.props.trabajo(this.state.obj,"V");
    }

    recogeDatos = (e) => {
        let obj = this.state.obj;
        obj[e.target.name] = e.target.value
        this.setState({ obj: obj })
        console.log("recogeDatos", obj)
        console.log("recogeDatosName", e.target.name)
    }
    componentDidMount() {
        this.setState(this.props.obj);
    }

    render() {

        let orden=this.props.orden;
        let obj=this.state.obj;
        console.log("La orden", orden);
        return (
            <>
            {React.cloneElement(this.props.formulario,
               {orden: orden, obj:obj, funcion:this.recogeDatos }) }
                <button type="button"
                    className="btn btn-dark"
                    onClick={this.enSubmit}
                >
                    {LETRERO_BOTON[this.props.orden]}
                </button>

                <button type="button"
                    className="btn btn-red"
                    onClick={this.enCancel}
                >
                    Cancelar
                </button>

            </>
        )
    }
}

CtrlFormulario.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    trabajo: PropTypes.func
}