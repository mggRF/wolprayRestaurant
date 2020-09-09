import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, DRESSCODE } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';

export default class ListadoDresscode extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + DRESSCODE, this.leeTabla);
    }
    leeTabla() {
        AccesoAPI.accederApi(this.gl.terminaURLlistado())
            .then(response => {
                console.log(response);
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
                    <td key={index} >{valor.dressCodeId}</td>
                    <td>{valor.dressCodeDescription}</td>
                    <TresBotonesListado funcion={this.props.trabajo}
                                        id={valor.dressCodeId}/>
                </tr>

            ))
            
            
        return (
            
            <div className="container animate__animated animate__fadeIn">
            <h1>Listado Dresscode</h1>
            <table className ="table">
                <thead>
                    <tr>
                        <MontaCabecera separador='th'
                        funcion={this.gl.setSortedField}
                        lista={[
                            ['dressCodeId', 'Identificador'],
                            ['dressCodeDescription', 'name']
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
                    tabla={DRESSCODE}>
            </Paginacion>
        </div>
        )
    }
  
}
ListadoDresscode.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}