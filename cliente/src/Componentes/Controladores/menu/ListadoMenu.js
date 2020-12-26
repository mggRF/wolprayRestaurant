import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, MENU } from '../../Constantes';
import AccesoAPI from '../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';

import Paginacion from '../../../Servicios/Paginacion';
import GestorListado from '../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';
import BotonInsertar from './../../Fragmentos/BotonInsertar';
 

export default class ListadoMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: "",
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + MENU, this.leeTabla);
    }
    leeTabla() {
        AccesoAPI.accederApi(this.gl.terminaURLlistado())
            .then(response => {
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
        let item = [];
        this.state.datos.forEach((valor, index) => item.push(
            <tr key={index}>
                <td key={index} >{valor.idMenu}</td>

                <td>{valor.locName}</td>
                <td>{valor.menuName}</td>
                <td>{valor.menuPrecio}</td>
                <td>{valor.menuSeq}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.idMenu} />
            </tr>

        ))
        return (
            <div className="container animate__animated animate__fadeIn">
                <div className='col-12 cabecera_controlador animate__animated animate__slideInUp'>
                    <h2>Listado de Menús
                    <BotonInsertar 
                            funcion={() =>
                                this.props.insertar("I", 0,
                                    this.props.datosAux)}
                        /></h2>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <MontaCabecera separador='th'
                                funcion={this.gl.setSortedField}
                                lista={[
                                    ['idmenu', 'Identificador'],
                                    ['locName', 'Local'],
                                    ['menuName', 'Nombre'],
                                    ['menuPrecio', 'Precio'],
                                    ['menuSeq', 'Publicacion'],
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
                    tabla={MENU}>
                </Paginacion>
            </div>
        )
    }
}
ListadoMenu.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func,
    insertar: PropTypes.func
}