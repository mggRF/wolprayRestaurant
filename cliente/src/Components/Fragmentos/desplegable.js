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
        id:0
    }

    componentDidUpdate() {
        this.monta();
    }
    componentDidMount(){
        this.monta();
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("Update ",nextProps.depend,this.state.id)
    //     return nextProps.depend !== this.state.id;
    // }
    monta(){
        if (this.props.depend === this.state.id){
            return
        }
        this.setState({id:this.props.depend});
        console.log("monta",this.props.depend)
        if (this.props.depend !== 0) {
            AccesoAPI.leerDesplegables(this.props.table, this.props.depend)
                .then(response => {
                    console.log("Respuesta...", response);
                    if (response.Respuesta === "ok") {
                        this.setState({ datos: response.Datos })
                    }
                    else {
                        this.setState({ error: response.Respuesta });
                    }

                })
            // .catch(response => {
            //     this.setState({
            //         error: response.Respuesta,
            //         datos: response.Datos
            //     });
            // });
        }
    }




    render() {
        
        let items = [];
        items.push(<option key="0" value="0">Selecciona....</option>);
        console.log("render desplegable",this.state.datos.length)
        if (this.state.datos.length > 0) {
            this.state.datos.forEach((valor, index) => {
                items.push(<option key={index + 1} value={valor.id}>{valor.opcion}</option>);
            });
        }
        let nombreCampo=this.props.table+"selec";
        console.log("label=",nombreCampo);
        return (
            <>
            <label htmlFor={nombreCampo}>{this.props.label}</label>
            <select id={nombreCampo} onChange={this.props.readValue} value={this.props.value}>
                {items}
            </select>
            </>
        )

    }


}

Desplegable.propTypes = {
    readValue: PropTypes.func,
    label: PropTypes.string,
    table: PropTypes.string.isRequired,
    value: PropTypes.number,
    depend: PropTypes.number

}