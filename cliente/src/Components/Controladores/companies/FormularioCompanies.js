import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from './InputComponent';
import { DesplegableDireccion, Desplegables } from '../../Fragmentos/DesplegableDireccion';




export default class FormularioCompanies extends Component {

    render() {
        let company = this.props.obj;
        let readonly = false;
        if (this.props.orden == 'D' || this.props.orden == 'V')
            readonly = true
        let title = '';
        switch (this.props.orden) {
            case 'I':
                title = 'añadir';
                break;
            case 'E':
                title = 'modificar';
                break;
            case 'E':
                title = 'modificar';
                break;
            default:
                title = 'Información sobre empresa';
                break;
        }
        console.log("Company=>", company);
        console.log('El readonly es: ' + readonly)
        return (
            <div>
                {
                    (!readonly) ?
                        (<h1>{'Formulario para ' + title}</h1>) :
                        (<h1>{title}</h1>)
                }
                <br />
                <form className="form-horizontal" >
                    {
                        (company.companyid) ?
                            (<><InputComponent
                                handleChange={this.props.funcion}
                                name="companyid"
                                label="ID"
                                readOnly={true}
                                value={company.companyid.toString()}
                            /></>) : null
                    }

                    <InputComponent
                        handleChange={this.props.funcion}
                        name="companyName"
                        label="Nombre"
                        readOnly={readonly}
                        value={company.companyName}
                    />

                    <InputComponent
                        handleChange={this.props.funcion}
                        name="companyAddress"
                        label="Dirección"
                        readOnly={readonly}
                        value={company.companyAddress}
                    />
                    <InputComponent
                        handleChange={this.props.funcion}
                        name="company_CIF"
                        label="CIF"
                        readOnly={readonly}
                        value={company.company_CIF}
                    />


                    {
                        (readonly) ?
                            (<InputComponent
                                handleChange={this.props.funcion}
                                name="city"
                                label="Ciudad"
                                readOnly={readonly}
                                value={company.cityName}
                            />) :
                            (<>
                                <DesplegableDireccion
                                    valor1={company.stateid}
                                    valor2={company.provinceid}
                                    valor3={company.cityid}
                                    depend1={company.countryId}
                                    depend2={company.stateid}
                                    depend3={company.provinceid}
                                    funcion={this.props.funcion}
                                />
                            </>)
                    }
                </form>
            </div>
        )
    }
}

FormularioCompanies.defaultProps = {
    orden: "V"
}

FormularioCompanies.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}