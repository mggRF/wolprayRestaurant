import React, { Component } from 'react';
import PropTypes from 'prop-types';


import swal from 'sweetalert'
import { API_URL, COMPANIES } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';
import { Alerts } from '../../Fragmentos/Alerts';

export default class ListadoCompanies extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
    }
    leeTabla() {
        AccesoAPI.accederApi(API_URL + COMPANIES)
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
        let styleHeader = {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around"
        }

        this.state.datos.forEach((valor, index) => item.push(
            <tr key={index}>
                <td key={index} >{valor.companyid}</td>
                <td>{valor.companyName}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.companyid} />
            </tr>

        ))


        return (

            <div className="container">
                <div style={styleHeader}>
                    <h1>Listado Empresas</h1>
                    <BotonListado funcion={this.props.insertar} clase="btn-success" tipo="I" id={0}>Añadir club</BotonListado>
                </div>
                <table className="table">
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
ListadoCompanies.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}