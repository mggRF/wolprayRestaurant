import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL, COMPANIES } from '../../Constantes';
import Desplegable from '../../Fragmentos/desplegable';




export default class FormularioCompanies extends Component {

    render() {
        let company = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false

        return (
            <div>
                {
                    (company.companyid) ?
                        (<><label htmlFor="companyid">Id</label>
                            <input name="companyid"
                                value={company.companyid}
                                onChange={this.props.funcion}
                                readOnly="ON" /></>) : null
                }
                <label htmlFor="companyName">Nombre</label>
                <input name="companyName"
                    value={company.companyName}
                    onChange={this.props.funcion}
                    readOnly={readonly} />
                <label htmlFor="companyAddress">Dirección</label>
                <input name="companyAddress"
                    value={company.companyAddress}
                    onChange={this.props.funcion}
                    readOnly={readonly} />
                <label htmlFor="company_CIF">CIF</label>
                <input name="company_CIF"
                    value={company.company_CIF}
                    onChange={this.props.funcion}
                    readOnly={readonly} />

                {
                    (company.stateid) ?
                        (<>
                            <Desplegable label="Comunidad autonoma" readValue={this.props.funcion} table='c_state' value={Number.parseInt(company.stateid)} depend={company.countryId} />
                            <Desplegable label="Provincia" readValue={this.props.funcion} table='c_provinces' value={Number.parseInt(company.provinceid)} depend={company.stateid} />
                            <Desplegable label="Poblacion" readValue={this.props.funcion} table='c_city' value={Number.parseInt(company.countryId)} depend={company.provinceid} />
                        </>): null
                }
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