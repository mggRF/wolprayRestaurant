import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AccesoAPI from './../../Servicios/AccesoAPI';


export default class Desplegable extends Component {
    static defaultProps = {
        value: ''
    }
    state = {
        datos: [],
        error: "",
        id: 0
    }

    componentDidUpdate(prevProps) {
        if (prevProps.depend !== this.props.depend) {
            this.monta(this.props.depend)
        }
    }
    componentDidMount() {
        this.monta(this.props.depend);
    }
    monta(depend) {
        AccesoAPI.leerDesplegables(this.props.table, depend)
            .then(response => {
                if (response.Ok) {
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ error: response.Message });
                }
            })
    }

render() {

    let items = [];
    items.push(<option key="0" value="0">Selecciona....</option>);
    if (this.state.datos.length > 0) {
        this.state.datos.forEach((valor, index) => {
            items.push(<option key={index + 1} value={valor.id}>{valor.opcion}</option>);
        });
    }

    let nombreCampo = this.props.name;
    let valor = this.props.value;
    //console.log("render",nombreCampo,valor,this.props.depend)
    return (

        <div className="form-field col-lg-6">
            <label htmlFor={nombreCampo}
                className="label"
            >
                {<h4>{`${this.props.label}:`}</h4>}
            </label>
            <select name={nombreCampo}
                id={nombreCampo}
                className="form-control"
                onChange={this.props.readValue}
                value={valor}
            >
                {items}
            </select>
        </div>
    )

}
}

Desplegable.propTypes = {
    readValue: PropTypes.func,
    label: PropTypes.string,
    table: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired

}