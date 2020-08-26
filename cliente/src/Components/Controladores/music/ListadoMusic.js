import React, { Component } from 'react'
import { API_URL, MUSIC } from '../../Constantes';
import { montaBotones } from '../../../Servicios/funcionesHTML';
//import PropTypes from 'prop-types'
import AccesoAPI from './../../../Servicios/AccesoAPI';




export default class ListadoMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
    }
    leeTabla() {
        AccesoAPI.accederApi(API_URL + MUSIC)
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




        return (
            <>
                <h1>Listado Music</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th></th><th></th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.datos.forEach((valor, index) => (

                            <tr>
                                <td key={index} >{valor.musicid.musicid}</td>
                                <td>{valor.musicid.musicName}</td>
                                {montaBotones(valor.musicid.musicid)}
                            </tr>

                        ))}


                    </tbody>

                </table>
            </>
        )
    }
}