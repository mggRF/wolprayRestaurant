import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'

import ListadoMusic from './ListadoMusic';
import CtrlFormulario from './CtrlFormularioMusic';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';


export default class ControllerMusic extends Component {


    constructor(props) {
        super(props);
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario()
        }
    }

    trabajoSolicitado = (orden, id) => {
        this.setState({
            estadoActualizado: 1,       //pongo modo formulario
            ordem: orden,               //pongo lo que ha de hacer
            id: id                      //pongo sobre quien lo ha de hacer
        });
        console.log("Paso por trabajo solicitado")

    }

    render() {
        if (this.state.estadoUsuario.role !== 9) {
            return <Redirect to="/login" />
        }
        console.log('RENDER=>', this.state.estadoActualizado)
        return (
            <>
            <ListadoMusic usuario={this.state.usuario} trabajo={this.trabajoSolicitado} />
            {(this.state.estadoActualizacion === 1) ?
                <CtrlFormulario orden={this.state.orden} id={this.state.id} />
                : ""}

            {(this.state.estadoActualizacion === 2) ? <h1>En proceso</h1> : ""}  


            </>
        )

    }
}