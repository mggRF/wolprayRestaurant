import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, USERS } from '../../Constantes';
import AccesoAPI from '../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';


import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';


export default class ListadoUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + USERS, this.leeTabla);
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


        console.log("RENDER=>", this.state.datos)

        let item = [];
            this.state.datos.forEach((valor, index) => item.push(
                <tr key={index}>
                    <td key={index} >{valor.userid}</td>
                    <td>{valor.userName}</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.userid}/>
                </tr>

            ))
            
            
        return (
            
            <div className="container">
            <h1>Listado Usuarios</h1>
            <table className ="table">
                <thead>
                    <tr>
                    <MontaCabecera separador='th'
                    funcion={this.gl.setSortedField}
                    lista={[
                        ['userid', 'Identificador'],
                        ['userName', 'name']
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
                    tabla={USERS}>
            </Paginacion>
        </div>
        )
    }
}
ListadoUsers.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}