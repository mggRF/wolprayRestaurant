import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import DesplegableAut from './../../Fragmentos/DesplegableAut';

export default class FormularioMenuPlatos extends Component {


    render() {
        let mplatos = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false
        let datosAux=this.props.datosAux;
        if (!mplatos.idMenu) mplatos.idMenu = datosAux.menu;

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Platos del menu</h1>
                <label htmlFor="idmenu_platos "></label>
                <div className="container">
                    <form className="formulario row">
                        {
                            (mplatos.idmenu_platos) ?
                                <InputComponent name="idmenu_platos"
                                    handleChange={this.props.funcion}
                                    label="Slot ID"
                                    readOnly={true}
                                    value={mplatos.idmenu_platos}
                                    orden={this.props.orden} /> : null
                                    
                        }

                        <DesplegableAut
                            name='idMenu'
                            table='menu'
                            label='Menu'
                            readValue={this.props.funcion}
                            idvalue={mplatos.idMenu}
                            value={mplatos.menuName}
                            readOnly={readonly}
                            orden={this.props.orden}
                            depend='1'
                        />

                        <DesplegableAut
                            name='mpGrupo'
                            table='n_grupos'
                            label='Grupo'
                            readValue={this.props.funcion}
                            idvalue={mplatos.mpGrupo}
                            value={mplatos.grupName}
                            readOnly={readonly}
                            orden={this.props.orden}
                        />
                        <DesplegableAut
                            name='mpPlato'
                            table='products'
                            label='Plato carta'
                            readValue={this.props.funcion}
                            idvalue={mplatos.mpPlato}
                            value={mplatos.productName}
                            readOnly={readonly}
                            orden={this.props.orden}
                        />

                        <InputComponent name="mpPlatoName"
                            handleChange={this.props.funcion}
                            label="Nombre Plato"
                            readOnly={readonly}
                            value={mplatos.mpPlatoName} 
                            orden={this.props.orden}/>

                        
                        <InputComponent name="mpPlatoDescri"
                            handleChange={this.props.funcion}
                            type='textarea'
                            label="Descripcion plato"
                            readOnly={readonly}
                            value={mplatos.mpPlatoDescri} 
                            orden={this.props.orden}/>/>


                        


                    </form>
                </div>
            </section>


        )
    }
}

FormularioMenuPlatos.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}