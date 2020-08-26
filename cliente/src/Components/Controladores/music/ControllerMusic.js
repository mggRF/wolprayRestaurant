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
        AccesoAPI.leerUNO('n_music', this.state.id)
            .then(response => {
                console.log("Respuesta=>", response);
                if (response.Respuesta = 'ok') {
                    this.setState({
                        estadoActualizado: 1,       //pongo modo formulario
                        ordem: orden,               //pongo lo que ha de hacer
                        id: id,                      //pongo sobre quien lo ha de hacer
                        objeto: response.datos
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

        this.setState({ estadoActualizado: 0 });     //preparo para que se pueda volver a listar
        if (this.state.orden !== "V") {
            this.setState({ estadoActualizado: 2 })
            AccesoAPI.enviarTodo('n_music', METODO[this.state.orden], music, music.id)
                .then(response => {
                    console.log("Respuesta=>", response);
                    this.setState({ estadoActualizado: 2 });
                })

        }
    }

    render() {
        if (this.state.estadoUsuario.role !== 9) {
            return <Redirect to="/login" />
        }
        console.log('RENDER=>', this.state.estadoActualizado)
        //
        // se debe sacar mensaje de error, si esta en state
        //
        return (
            <>
                <ListadoMusic usuario={this.state.usuario} trabajo={this.trabajoSolicitado} />
                {(this.state.estadoActualizacion === 1) ?
                    <CtrlFormulario orden={this.state.orden} obj={this.state.objeto} />
                    : ""}

                {(this.state.estadoActualizacion === 2) ? <h1>En proceso</h1> : ""}


            </>
        )

    }
}