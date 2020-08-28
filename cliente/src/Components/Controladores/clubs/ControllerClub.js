import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormularioClub from './FormularioClub';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoClubs from './ListadoClubs';




export default class  ControllerClub extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'clubs';
        this.ID = 'clubid';
        this.LISTADO = ListadoClubs
        this.FORMULARIO = FormularioClub
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}