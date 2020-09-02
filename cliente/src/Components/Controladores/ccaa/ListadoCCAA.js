import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { API_URL, STATES } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

export default class ListadoCCAA extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
    }
    leeTabla() {
        AccesoAPI.accederApi(API_URL + STATES)
            .then(response => {
                console.log(response);
                if (response.Respuesta === "ok") {
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ error: response.Respuesta });
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
                <td>{valor.stateid}</td>
                <td>{valor.stateName}</td>
                <td>{valor.countryName}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.stateid} />
            </tr>

        ))


        return (

            <div className="container">
                <div className = 'cabecera_controlador'>
                    <h1>Listado de estados</h1>
                    <BotonListado funcion={this.props.insertar} clase="btn-success" tipo="I" id={0}>Añadir estado</BotonListado>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
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
ListadoCCAA.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}