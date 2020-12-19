import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import DesplegableAut from '../../Fragmentos/DesplegableAut';

export default class FormularioProducts extends Component {
    render() {
        let objProduct = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false;

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Productos</h1>
                <div className="container">
                    <form className="formulario row">
                        <div className="container">
                        </div>
                        {
                            (objProduct.idProduct) ?
                                <InputComponent name="idProduct"
                                    handleChange={this.props.funcion}

                                    label="ID"
                                    readOnly={true}
                                    value={objProduct.idProduct}
                                    orden={this.props.orden} /> : null
                        }




                        <DesplegableAut
                            name='idLocal'
                            table='locals'
                            label='Local'
                            readValue={this.props.funcion}
                            idvalue={objProduct.idLocal}
                            value={objProduct.locName}
                            readOnly={readonly}
                            orden={this.props.orden}
                        />

                        <InputComponent name="productName"
                            handleChange={this.props.funcion}
                            type='text'
                            label="Nombre producto"
                            readOnly={readonly}
                            value={objProduct.productName}
                            orden={this.props.orden} />

                        <InputComponent name="productDescri"
                            handleChange={this.props.funcion}
                            type='textarea'
                            label="Descripcion producto"
                            readOnly={readonly}
                            value={objProduct.productDescri}
                            orden={this.props.orden} />

                        <InputComponent name="productPrice"
                            handleChange={this.props.funcion}
                            type='number'
                            label="Precio"
                            readOnly={readonly}
                            value={objProduct.productPrice}
                            orden={this.props.orden} />

                        <DesplegableAut
                            name='idGrupo'
                            table='n_grupos'
                            label='Grupo'
                            readValue={this.props.funcion}
                            idvalue={objProduct.idGrupo}
                            value={objProduct.grupName}
                            readOnly={readonly}
                            orden={this.props.orden}
                        />
                    </form>
                </div>
            </section>


        )

    }
}
FormularioProducts.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}