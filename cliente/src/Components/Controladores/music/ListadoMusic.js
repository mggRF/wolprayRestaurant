import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, MUSIC, COLORES, LETRERO_BOTON } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import { BotonCabecera } from './../../Fragmentos/BotonCabecera';


export default class ListadoMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: "",
        }
        this.gl = new GestorListado(API_URL + MUSIC);
    }
    leeTabla() {
        AccesoAPI.accederApi(this.gl.terminaURLlistado())
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



    setSortedField = (clasi) => {
        console.log("clasi ",clasi)
        this.gl.setClasificador(clasi.nombre);
        this.leeTabla();
    }

    pageHandler = (ajuste) => {
        this.gl.pageHandler(ajuste);
        this.leeTabla();
    }
    componentDidMount() {
        this.leeTabla();
    }

    render() {
        let item = [];
        this.state.datos.forEach((valor, index) => item.push(
            <tr key={index}>
                <td key={index} >{valor.musicid}</td>
                <td>{valor.musicName}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.musicid} />
            </tr>

        ))
        return (
            <div className="container">
                <h1>Listado Music</h1>
                <BotonListado funcion={this.props.insertar}
                    clase={COLORES.BTN_INSERT}
                    tipo="I"
                    id={0}>
                    {LETRERO_BOTON.I}
                </BotonListado>
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <BotonCabecera
                                    name="id"
                                    col="Identificador"
                                    gestionClas={this.setSortedField}
                                />
                            </th>
                            <th>
                                <BotonCabecera
                                    name="name"
                                    col="name"
                                    gestionClas={this.setSortedField}
                                />
                            </th>
                            <th></th><th></th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {item}
                    </tbody>
                </table>
                <Paginacion
                    paging={this.state.paging}
                    pageHandler={this.pageHandler}
                    tabla={MUSIC}>
                </Paginacion>
            </div>
        )
    }
}
ListadoMusic.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func,
    insertar: PropTypes.func
}