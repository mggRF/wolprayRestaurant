import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, EVENTS } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';

export default class ListadoEvents extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + EVENTS, this.leeTabla);
    }
    leeTabla() {
        AccesoAPI.accederApi(this.gl.terminaURLlistado())
            .then(response => {
                console.log(response);
                if (response.Ok) {
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ error: response.Datos });
                }

            })
    }

    componentDidMount() {
        this.leeTabla();
    }




    render() {
        let item = [];
        
            this.state.datos.forEach((valor, index) => item.push(
                <tr key={index}>
                    <td key={index} >{valor.eventid}</td>
                    <td>{valor.eventName}</td>
                    <td>{valor.event_initDate.split('T')[0]}</td>
                    <td>{valor.event_endDate.split('T')[0]}</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.eventid}/>
                </tr>

            ))
            
            
        return (
            
            <div className="container animate__animated animate__fadeIn">
            <h1>Listado Eventos</h1>
            <table className ="table">
                <thead>
                    <tr>
                        <MontaCabecera separador='th'
                        funcion={this.gl.setSortedField}
                        lista={[
                            ['eventid', 'Identificador'],
                            ['eventName', 'Nombre'],
                            ['event_initDate', 'Fecha inicio'],
                            ['event_endDate', 'Fecha fin']
                        ]} />
                        <th></th><th></th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {item}
                </tbody>
            </table>
            <Paginacion
                    pageHandler={this.gl.pageHandler}
                    tabla={EVENTS}>
            </Paginacion>
        </div>
        )
    }
  
}
ListadoEvents.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}