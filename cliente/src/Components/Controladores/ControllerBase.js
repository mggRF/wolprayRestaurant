import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'

import AccesoAPI from '../../Servicios/AccesoAPI';
import { METODO } from '../Constantes';
import CtrlFormulario from './../../Servicios/CtrlFormulario';


export default class ControllerBase extends Component {


    constructor(props) {
        super(props);

    }

    trabajoSolicitado = (orden, id) => {
        //console.log("Controller, orden y id=>",orden,id)
        AccesoAPI.leerUNO(this.TABLA, id)
            .then(response => {
                //console.log("RespuestaUNO=>", response);
                if (response.Respuesta = 'ok') {
                    console.log("leer uno es correcto y la variable orden contiene: ",orden)
                    this.setState({
                        estadoActualizacion: 1,       //pongo modo formulario
                        orden: orden,               //pongo lo que ha de hacer
                        id: id,                      //pongo sobre quien lo ha de hacer
                        objeto: response.Datos[0]
                    });
                } else {
                    this.setState({
                        err: true,
                        msjerr: response.Datos
                    })
                }
            })
    }

    accionSolicitada = (datos) => {
        this.setState({ estadoActualizacion: 0 });     //preparo para que se pueda volver a listar
        if (this.state.orden !== "V") {
            this.setState({ estadoActualizacion: 2 })
            AccesoAPI.enviarTodo(this.TABLA, METODO[this.state.orden], datos, datos[this.ID])
                .then(response => {
                    this.setState({ estadoActualizacion: 0 });
                })

        }
    }

    render() {
        const LISTADO = this.LISTADO;
        const FORMULARIO = this.FORMULARIO;
        console.log('RENDER=>', this.state)
        //
        // se debe sacar mensaje de error, si esta en state
        //
        return (
            <>
                {(this.state.estadoActualizacion === 0) ?
                    <LISTADO usuario={this.state.usuario}
                        trabajo={this.trabajoSolicitado} />
                    : ""}
                {(this.state.estadoActualizacion === 1) ?
                    <CtrlFormulario orden={this.state.orden}
                        obj={this.state.objeto}
                        trabajo={this.accionSolicitada}
                        formulario={<FORMULARIO />}
                    />
                    : ""}

                {(this.state.estadoActualizacion === 2) ? 
                    <h1>En proceso</h1> : ""}


            </>
        )

    }
}