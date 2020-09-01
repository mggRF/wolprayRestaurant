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

    componentDidUpdate() {
        this.monta();
    }
    componentDidMount() {
        this.monta();
    }
    monta() {
        if (this.props.depend === this.state.id) {
            return
        }
        if(this.props.depend){

            this.setState({ id: this.props.depend });
            if (this.props.depend !== 0) {
                AccesoAPI.leerDesplegables(this.props.table, this.props.depend)
                    .then(response => {
                        if (response.Respuesta === "ok") {
                            this.setState({ datos: response.Datos })
                        }
                        else {
                            this.setState({ error: response.Respuesta });
                        }
    
                    })
            } 
        }else {
            AccesoAPI.leerDesplegables('c_state', '209')
                .then(response => {
                    if (response.Respuesta === "ok") {
                        this.setState({ datos: response.Datos })
                    }
                    else {
                        this.setState({ error: response.Respuesta });
                    }

                })
        }
    }




    render() {

        let items = [];
        items.push(<option key="0" value="0">Selecciona....</option>);
        console.log(this.state.datos);
        if (this.state.datos.length > 0) {
            this.state.datos.forEach((valor, index) => {
                items.push(<option key={index + 1} value={valor.id}>{valor.opcion}</option>);
            });
        }

        let nombreCampo = this.props.name;
        return (
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor={nombreCampo}
                        className="control-label col-md-2"
                    >
                        {this.props.label}
                    </label>
                    <div className="col-md-10">
                        <select name={nombreCampo}
                            id={nombreCampo}
                            className="form-control"
                            onChange={this.props.readValue}
                            value={this.props.value}
                        >
                            {items}
                        </select>
                    </div>
                </div>
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