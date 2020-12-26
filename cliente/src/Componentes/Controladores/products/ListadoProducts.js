import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, PRODUCTS } from '../../Constantes';
import AccesoAPI from '../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonInsertar from '../../Fragmentos/BotonInsertar';

import Paginacion from '../../../Servicios/Paginacion';
import GestorListado from '../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';
import { INS } from '../../Constantes';

export default class ListadoProducts extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + PRODUCTS, this.leeTabla);
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
                <td key={index} >{valor.idProduct}</td>
                <td>{valor.locName}</td>
                <td>{valor.productName}</td>
                <td>{valor.productDescri.substr(0,20)}</td>
                <td>{valor.productPrice}</td>
                <td>{valor.grupName}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.idProduct} />
            </tr>

        ))


        return (

            <div className="container animate__animated animate__fadeIn">
                <div className='col-12 cabecera_controlador animate__animated animate__slideInUp'>
                    <h2>Listado de Productos
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
                                    ['idProduct', 'Identificador'],
                                    ['locName', 'Local'],
                                    ['productName', 'Producto'],
                                    ['productDescri', 'Descripcion'],
                                    ['productPrice', 'Precio'],
                                    ['grupName', 'Grupo']
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
                    tabla={PRODUCTS}>
                </Paginacion>
            </div>
        )
    }

}
ListadoProducts.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}