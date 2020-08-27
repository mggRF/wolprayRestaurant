import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BotonListado from './BotonListados'
import { VIE, MOD, DEL } from '../Constantes'


export default class TresBotonesListado extends Component {

    render() {
        let funcion = this.props.funcion;
        return (
            <>
                <td>
                    <BotonListado funcion={funcion}
                        clase="btn-info"
                        tipo="V"
                        id={this.props.id}>
                        {VIE}
                    </BotonListado>
                </td><td>
                    <BotonListado funcion={funcion}
                        clase="btn-success"
                        tipo="E"
                        id={this.props.id}>
                        {MOD}
                    </BotonListado>
                </td><td>
                    <BotonListado funcion={funcion}
                        clase="btn-danger"
                        tipo="D"
                        id={this.props.id}>
                        {DEL}
                    </BotonListado>
                </td>

            </>
        )
    }
}
TresBotonesListado.propTypes = {
    funcion: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}