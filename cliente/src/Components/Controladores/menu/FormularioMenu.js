import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import DesplegableAut from './../../Fragmentos/DesplegableAut';

export default class FormularioMenu extends Component {
    render() {
        let menu = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Menú</h1>
                <div className="container">
                    <form className="formulario row">
                        {
                            (menu.idmenu) ?
                                <InputComponent name="idmenu"
                                    handleChange={this.props.funcion}

                                    label="ID"
                                    readOnly={true}
                                    value={menu.idmenu} /> : null
                        }
                        <DesplegableAut
                            name='idLocal'
                            table='locals'
                            label='Local'
                            readValue={this.props.funcion}
                            idvalue={menu.idLocal}
                            value={menu.locName}
                            readOnly={readonly}
                            orden={this.props.orden}
                        />
                        <InputComponent name="menuName"
                            handleChange={this.props.funcion}
                            label="Nombre"
                            readOnly={readonly}
                            value={menu.menuName}
                            orden={this.props.orden}
                        />
                        <InputComponent
                            type='textarea'
                            name="menuDescription"
                            handleChange={this.props.funcion}
                            label="Descripción"
                            readOnly={readonly}
                            value={menu.menuDescription}
                            orden={this.props.orden}
                        />
                        <InputComponent name="menuPrecio"
                            type="number"
                            handleChange={this.props.funcion}
                            label="Precio"
                            readOnly={readonly}
                            value={menu.menuPrecio}
                            orden={this.props.orden}
                        />
                        <InputComponent name="menuSeq"
                            handleChange={this.props.funcion}
                            label="Publicacion"
                            readOnly={readonly}
                            value={menu.menuSeq}
                            orden={this.props.orden}
                        />
                    </form>

                </div>
            </section>


        )
    }
}
FormularioMenu.defaultProps = {
    orden: "V"

}
FormularioMenu.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']),
    obj: PropTypes.object,
    funcion: PropTypes.func
}