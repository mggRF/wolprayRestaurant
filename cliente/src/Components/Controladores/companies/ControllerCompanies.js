import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormularioCompanies from './FormularioCompanies';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoCompanies from './ListadoCompanies';




export default class  ControllerCompanies extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'companies';
        this.ID = 'companyid';
        this.LISTADO = ListadoCompanies
        this.FORMULARIO = ListadoCompanies
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}