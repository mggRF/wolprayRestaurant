import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, ROLE } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';





export default class ListadoRole extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
    }
    leeTabla() {
        AccesoAPI.accederApi(API_URL + ROLE)
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
        {
            this.state.datos.forEach((valor, index) => item.push(
                <tr key={index}>
                    <td key={index} >{valor.roleid}</td>
                    <td>{valor.roleName}</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.roleid}/>
                </tr>

            ))
            }
            
        return (
            
            <div className="container">
            <h1>Listado Roles</h1>
            <table className ="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th></th><th></th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {item}
                </tbody>

            </table>
        </div>
        )
    }
}
ListadoRole.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}