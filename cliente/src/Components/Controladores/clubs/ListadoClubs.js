import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, CLUBS } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';

export default class ListadoClubs extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }

        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + CLUBS, this.leeTabla);
    }
    leeTabla() {
        AccesoAPI.accederApi(this.gl.terminaURLlistado())
            .then(response => {
                console.log("RESPONDE DESDE LISTADOCLUB", response);
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


        console.log("RENDER=>", this.state.datos)

        let item = [];
        
        
            this.state.datos.forEach((valor, index) => item.push(
                <tr key={index}>
                    <td key={index} >{valor.clubid}</td>
                    <td>{valor.clubName}</td>
                    <td>{valor.clubPhone}</td>
                    <td>{valor.dressCodeid}</td>
                    <td>{valor.streetName}</td>
                    <td>{valor.streetNumber}</td>
                    <td>{valor.postal_code}</td>
                    <td>{valor.cityid}</td>
                    <td>{valor.companyid}</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.clubid}/>
                </tr>

            ))
           
            
        return (
            
            <div className="container animate__animated animate__fadeIn">
            <div className = 'cabecera_controlador'>
                <h1>Listado Clubs</h1>
                <BotonListado funcion={this.props.insertar} clase="btn-success" tipo="I" id={0}>Añadir club</BotonListado>
            
            </div>
            
            <table className ="table">
                <thead>
                    <tr>
                    <MontaCabecera separador='th'
                    funcion={this.gl.setSortedField}
                    lista={[
                        ['clubid', 'Identificador'],
                        ['clubName', 'name'],
                        ['clubPhone', 'Phone'],
                        ['dressCodeid', 'Codigo Vestimenta'],
                        ['streetName', 'Calle'],
                        ['streetNumber', 'Número de calle'],
                        ['postal_code', 'Código Postal'],
                        ['cityid', 'ID Ciudad'],
                        ['companyid', 'ID Empresa'],
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
                    tabla={CLUBS}>
            </Paginacion>
        </div>
        )
    }
  
}
ListadoClubs.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}