import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, MENU_PLATOS } from '../../Constantes';
import AccesoAPI from '../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';
import { INS } from '../../Constantes';

import Paginacion from '../../../Servicios/Paginacion';
import GestorListado from '../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';

export default class ListadoMenuPlatosDetalle extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: "",
            clubid: 0,
            mes: 0
        }
        
        this.gl = new GestorListado(API_URL + MENU_PLATOS + "/BYMENU/" + this.props.menu, this.leeTabla);

        this.leeTabla = this.leeTabla.bind(this);
    }
    leeTabla() {
        console.log(this.gl.terminaURLlistado())
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
    componentDidUpdate(prevState, prevProps) {
        if(prevProps.menu != this.state.menu) {
            this.leeTabla();
        }
    }
    render() {
        let item = [];
        let datosAux = { local:this.props.local,
                        menu: this.props.menu}
        console.log("MenuDetalle",datosAux);
        this.state.datos.forEach((valor, index) => item.push(

            <tr key={index}>
                <td key={index} >{valor.idmenu_platos}</td>
                <td>{valor.menuName}</td>
                <td>{valor.grupName}</td>
                <td>{valor.mpPlato}</td>
                <td>{valor.mpPlatoName}</td>
                <td> {valor.mpPlatoDescri.substr(0,20)}...</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.idmenu_platos} datosAux={datosAux} />
            </tr>
        ))


        return (

            <div className="container animate__animated animate__fadeIn">
                <div className='col-12 cabecera_controlador animate__animated animate__slideInUp'>
                    <h1>Listado de Platos</h1>
                    <BotonListado icon={INS} funcion={this.props.insertar} clase="btn-success" tipo="I" id={0} datosAux={datosAux}></BotonListado>
                </div>
                
                <table className="table">
                    <thead>
                        <tr>
                            <MontaCabecera separador='th'
                                funcion={this.gl.setSortedField}
                                lista={[
                                    ['idmenu_platos', 'Identificador'],
                                    ['menuName', 'Nombre menu'],
                                    ['grupName', 'Grupo'],
                                    ['mpPlato', 'N.PlatoCarta'],
                                    ['mpPlatoName', 'Nombre plato'],
                                    ['mpPlatoDescri', 'Descripcion']
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
                    tabla={MENU_PLATOS}>
                </Paginacion>
            </div>
        )
    }

}
ListadoMenuPlatosDetalle.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func,
    
}