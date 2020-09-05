import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, MUSIC, COLORES, LETRERO_BOTON } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import { BotonCabecera } from './../../Fragmentos/BotonCabecera';
import MontaCabecera from '../../Fragmentos/MontaCabecera';


export default class ListadoMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: "",
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + MUSIC, this.leeTabla);
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
                            <MontaCabecera separador='th'
                                funcion={this.gl.setSortedField}
                                lista={[
                                    ['musicid', 'Identificador'],
                                    ['musicName', 'name']
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