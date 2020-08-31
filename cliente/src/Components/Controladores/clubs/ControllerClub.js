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
        this.MODELO ={
         "clubid" : this.clubid,
         "clubName" : this.clubName,
         "streetName" : this.streetName,
         "streetNumber" : this.streetNumber,
         "postal_code" : this.postal_code,
         "cityid" : this.cityid,
         "description" : this.description,
         "clubPhone" : this.clubPhone,
         "dressCodeid" : this.dressCodeid,
         "coverUrl" : this.coverUrl,
         "latitude" : this.latitude,
         "longitude" : this.longitude,
         "howToGetThere" : this.howToGetThere,
         "entryCost" : this.entryCost,
         "openSeason1" : this.openSeason1,
         "closingSeason1" : this.closingSeason1,
         "openSeason2" : this.openSeason2,
         "closingSeason2" : this.closingSeason2,
         "openSeason3" : this.openSeason3,
         "closingSeason3" : this.closingSeason3,
         "accessAge" : this.accessAge,
         "DiasAnticipacion" : this.DiasAnticipacion,
         "companyid" : this.companyid,
         "maxPeople" : this.maxPeople,
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}