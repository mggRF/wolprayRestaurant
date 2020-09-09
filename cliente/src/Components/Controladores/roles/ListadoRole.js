import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, ROLE } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';



export default class ListadoRole extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + ROLE, this.leeTabla);
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
                    <td key={index} >{valor.roleid}</td>
                    <td>{valor.roleName}</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.roleid}/>
                </tr>

            ))
            
            
        return (
            
            <div className="container animate__animated animate__fadeIn">
            <h1>Listado Roles</h1>
            <table className ="table">
                <thead>
                    <tr>
                    <MontaCabecera separador='th'
                    funcion={this.gl.setSortedField}
                    lista={[
                        ['roleid', 'Identificador'],
                        ['roleName', 'name']
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
                    tabla={ROLE}>
            </Paginacion>
        </div>
        )
    }
}
ListadoRole.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}