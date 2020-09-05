import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { API_URL, COMPANIES } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

export default class ListadoCompanies extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
    }
    leeTabla() {
        console.log('Voy a acceder a la api')
        AccesoAPI.accederApi(API_URL + COMPANIES)
            .then(response => {
                console.log('Desde listado companies: ',response);
                if (response.Ok) {
                    console.log('La respuesta es ok')
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ error: response.Datos });
                }

                console.log('El estate es: ', this.state)

            }).catch(err => {
                console.log('Ha ocurrido un error: ', err);
            })
    }

    componentDidMount() {
        console.log('Did mount')
        this.leeTabla();
    }





    render() {


        console.log("RENDER=>", this.state.datos)

        let item = [];

        this.state.datos.forEach((valor, index) => item.push(
            <tr key={index}>
                <td key={index} >{valor.companyid}</td>
                <td>{valor.companyName}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.companyid} />
            </tr>

        ))


        return (

            <div className="container-fluid animate__animated animate__fadeIn">
                <div className="row mb-5">
                    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                        <div className="row">
                            <div className="col-12 cabecera_controlador">

                                <h1>Listado de mpresas</h1>
                                <BotonListado funcion={this.props.insertar} clase="btn btn-info btn-sm" tipo="I" id={0}>Añadir compañía</BotonListado>
                            </div>
                            <table className="table table-striped bg-light table-hover">
                                <thead>
                                    <tr className="text-mmuted">
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
                    </div>
                </div>
            </div>
        )
    }

}
ListadoCompanies.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}