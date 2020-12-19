import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListadoMenuPlatosDetalle from './ListadoMenuPlatosDetalle';
import Desplegable from '../../Fragmentos/Desplegable';




export default class ListadoMenuPlatos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: '0',
            menu:'0'
        }
        this.onChangeDesplegable = this.onChangeDesplegable.bind(this)
    }

    onChangeDesplegable(e) {

        if (e.target.id === 'idLocals') {
            this.setState({
                local: e.target.value
            });
        }
        if (e.target.id === 'idMenu') {
            this.setState({
                menu: e.target.value
            });
        }
    }

    render() {

        let listado = this.state.local !== '0' && this.state.menu !== '0'
        return (

            <div className="container animate__animated animate__fadeIn">
                <div className='container'>
                    
                <Desplegable
                        label="Seleccione local"
                        readValue={this.onChangeDesplegable}
                        table='locals'
                        value={this.state.local}
                        name="idLocals" />

               
                <Desplegable
                        label="Seleccione menu"
                        readValue={this.onChangeDesplegable}
                        table='menu'
                        value={this.state.menu}
                        name="idMenu"
                        depend = {this.state.local}  />

                </div>

                

                <div>
                    {(listado) ?
                        <ListadoMenuPlatosDetalle local={this.state.local} 
                                                  menu={this.state.menu} 
                                                  trabajo={this.props.trabajo} 
                                                  insertar={this.props.insertar}
                                                  orden={this.props.orden}/>
                        : null}

                </div>
            </div>
        )
    }

}
ListadoMenuPlatos.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}