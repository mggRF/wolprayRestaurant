import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, ZONAS } from '../../Constantes';
import AccesoAPI from '../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonInsertar from '../../Fragmentos/BotonInsertar';
 
import Paginacion from '../../../Servicios/Paginacion';
import GestorListado from '../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';

export default class ListadoLocalCity extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + ZONAS, this.leeTabla);
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
                <td key={index} >{valor.idLocalCity}</td>
                <td>{valor.cityName}</td>
                <td>{valor.locName}</td>
                <td>{valor.lcName.substr(0,20)}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.idLocalCity} />
            </tr>

        ))


        return (

            <div className="container animate__animated animate__fadeIn">
                <div className='col-12 cabecera_controlador animate__animated animate__slideInUp'>
                    <h2>Listado de localizaciones
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
                                    ['idLocalCity', 'Identificador'],
                                    ['cityName', 'Ciudad'],
                                    ['locName', 'local'],
                                    ['lcName', 'Ubicacion']
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
                    tabla={ZONAS}>
                </Paginacion>
            </div>
        )
    }

}
ListadoLocalCity.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}