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
        
        this.glSub = new GestorListado(API_URL + MENU_PLATOS + "/BYMENU/" + this.props.delayed.menu, this.leeTablaSub);

      
    }
    leeTablaSub = () => {
        console.log(this.glSub.terminaURLlistado())
        AccesoAPI.accederApi(this.glSub.terminaURLlistado())
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
        this.leeTablaSub();
    }
    componentDidUpdate(prevState, prevProps) {
        if(prevProps.menu !== this.state.menu) {
            this.leeTablaSub();
        }
    }
    render() {
        let item = [];
        let datosAux = { local:this.props.delayed.local,
                        menu: this.props.delayed.menu}
        console.log("MenuDetalle",datosAux);
        this.state.datos.forEach((valor, index) => item.push(

            <tr key={index}>
                <td key={index} >{valor.idmenu_platos}</td>
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
                    <h3>Listado de Platos</h3>
                    <BotonListado icon={INS} funcion={this.props.insertar} clase="btn-success" tipo="I" id={0} datosAux={datosAux}></BotonListado>
                </div>
                
                <table className="table">
                    <thead>
                        <tr>
                            <MontaCabecera separador='th'
                                funcion={this.glSub.setSortedField}
                                lista={[
                                    ['idmenu_platos', 'Id'],
                                    ['grupName', 'Grupo'],
                                    ['mpPlato', 'idCarta'],
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
                    pageHandler={this.glSub.pageHandler}
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