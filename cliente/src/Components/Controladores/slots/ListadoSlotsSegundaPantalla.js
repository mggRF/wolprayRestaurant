import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, SLOTS } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';

export default class ListadoSlotsSegundaPantalla extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        console.log("ESTAS SON LAS PROPS DESDE LISTADOSLOTS", this.props)
        this.leeTabla = this.leeTabla.bind(this);
        let clubymes = `/mes/${this.props.clubid}/2020/${this.props.mes}`
        this.gl = new GestorListado(API_URL + SLOTS + clubymes, this.leeTabla);
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
    componentDidUpdate(){
        this.leeTabla();
    }





    render() {
        let item = [];
       
        
            this.state.datos.forEach((valor, index) => item.push(
                (valor.listaVip===1)?
                <tr key={index}>
                    <td key={index} >{valor.slotid}</td>
                    <td>{valor.day.split('T')[0]}</td>
                    <td>{valor.opening_time}</td>
                    <td>{valor.closing_time}</td>
                    <td>{valor.maxPeople}</td>
                    <td>Si</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.slotid}/>
                </tr>
                :
                <tr key={index}>
                    <td key={index} >{valor.slotid}</td>
                    <td>{valor.day.split('T')[0]}</td>
                    <td>{valor.opening_time}</td>
                    <td>{valor.closing_time}</td>
                    <td>{valor.maxPeople}</td>
                    <td>NO</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.slotid}/>
                </tr>
            ))
            
            
        return (
            
            <div className="container animate__animated animate__fadeIn">
            <h1>Listado Slots </h1>
            <h3>{this.props.clubname}</h3>
            <h3>{this.props.nombremes}</h3>
            <table className ="table">
                <thead>
                    <tr>
                        <MontaCabecera separador='th'
                        funcion={this.gl.setSortedField}
                        lista={[
                            ['slotI', 'Identificador'],
                            ['day', 'Fecha'],
                            ['opening_time', 'Hora de apertura'],
                            ['closing_time', 'Hora de cierre'],
                            ['maxPeople', 'Máximo de personas'],
                            ['listaVip', 'Lista VIP']
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
                    tabla={SLOTS}>
            </Paginacion>
        </div>
        )
    }
  
}
ListadoSlotsSegundaPantalla.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func,
    mes:PropTypes.string,
    clubid:PropTypes.number,
    clubname:PropTypes.string,
    nombremes:PropTypes.string,
}