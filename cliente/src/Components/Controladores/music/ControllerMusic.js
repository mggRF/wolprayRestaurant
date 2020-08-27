import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'

import ListadoMusic from './ListadoMusic';
import CtrlFormulario from './CtrlFormularioMusic';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import { METODO } from '../../Constantes';


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
        //console.log("Controller, orden y id=>",orden,id)
        AccesoAPI.leerUNO('n_music', id)
            .then(response => {
                //console.log("RespuestaUNO=>", response);
                if (response.Respuesta = 'ok') {
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

    accionSolicitada = (music) => {
        this.setState({ estadoActualizacion: 0 });     //preparo para que se pueda volver a listar
        if (this.state.orden !== "V") {
            this.setState({ estadoActualizacion: 2 })
            AccesoAPI.enviarTodo('n_music', METODO[this.state.orden], music, music.musicid)
                .then(response => {
                    console.log("Respuesta=>", response);
                    this.setState({ estadoActualizacion: 0 });
                })

        }
    }

    render() {
        if (this.state.estadoUsuario.role !== 9) {
            return <Redirect to="/login" />
        }
        console.log('RENDER=>', this.state)
        //
        // se debe sacar mensaje de error, si esta en state
        //
        return (
            <>
                {(this.state.estadoActualizacion === 0) ?
                    <ListadoMusic usuario={this.state.usuario} trabajo={this.trabajoSolicitado} />
                    : ""}
                {(this.state.estadoActualizacion === 1) ?
                    <CtrlFormulario orden={this.state.orden} obj={this.state.objeto} trabajo={this.accionSolicitada} />
                    : ""}

                {(this.state.estadoActualizacion === 2) ? <h1>En proceso</h1> : ""}


            </>
        )

    }
}