import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Listado from './ListadoMusic';

import Formulario from './FormularioMusic';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';


export default class ControllerMusic extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'n_music';
        this.ID = 'musicid';
        this.LISTADO = Listado
        this.FORMULARIO = Formulario
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}