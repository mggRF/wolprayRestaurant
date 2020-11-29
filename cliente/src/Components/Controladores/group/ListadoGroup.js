import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, GRUPOS } from '../../Constantes';
import AccesoAPI from '../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

import Paginacion from '../../../Servicios/Paginacion';
import GestorListado from '../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';
import { INS } from '../../Constantes';

export default class ListadoGroup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + GRUPOS, this.leeTabla);
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
                <td key={index} >{valor.idGrupo}</td>
                <td>{valor.idLocal}</td>
                <td>{valor.grupName}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.idGrupo} />
            </tr>

        ))


        return (

            <div className="container animate__animated animate__fadeIn">
                <div className='col-12 cabecera_controlador animate__animated animate__slideInUp'>
                    <h1>Listado de Grupos</h1>
                    <BotonListado icon={INS} funcion={this.props.insertar} clase="btn-success" tipo="I" id={0}></BotonListado>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <MontaCabecera separador='th'
                                funcion={this.gl.setSortedField}
                                lista={[
                                    ['idGrupo', 'Identificador'],
                                    ['idLocal', 'Local'],
                                    ['grupName', 'Nombre']
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
                    tabla={GRUPOS}>
                </Paginacion>
            </div>
        )
    }

}
ListadoGroup.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}