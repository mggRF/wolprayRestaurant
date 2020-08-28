import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, MUSIC } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';





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


        console.log("RENDER=>", this.state.datos)

        let item = [];
        {
            this.state.datos.forEach((valor, index) => item.push(
                <tr key={index}>
                    <td key={index} >{valor.musicid}</td>
                    <td>{valor.musicName}</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.musicid}/>
                </tr>

            ))
            }
            
        return (
            
            <div className="container">
            <h1>Listado Music</h1>
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
ListadoMusic.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}