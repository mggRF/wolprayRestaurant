import React, { Component } from 'react'
import { API_URL, MUSIC } from '../../Constantes';
import { montaBotones } from '../../../Servicios/funcionesHTML';
//import PropTypes from 'prop-types'
import AccesoAPI from './../../../Servicios/AccesoAPI';




export default class ListadoMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: "",
            error: ""
        }
    }
    leeTabla() {
        AccesoAPI.accederApi(API_URL + MUSIC)
            .then(response => {
                if (response.Respuesta === "ok") {
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ error: response.Respuesta });
                }

            })
    }
    
    componentDidMount() {
        this.leerTabla();
    }

    


    render() {

        let items = [];

        if (this.state.datos.length > 0) {
            this.state.datos.forEach((valor, index) => {
                
                    items.push(<tr><td key={index} >{valor.musicid}</td><td>{valor.musicName}</td> {montaBotones(valor.musicid)}</tr>);
               
            });
        }
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
                        {items}
                    </tbody>

                </table>
            </>
        )
    }
}