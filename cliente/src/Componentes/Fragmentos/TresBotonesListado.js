import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'


export default class TresBotonesListado extends Component {


    render() {

        return (
            <>
                <td>
                    <IconButton
                        aria-label="visibility"
                        onClick={() =>
                            this.props.funcion("V", this.props.id,
                                this.props.datosAux)}
                    > 
                        <VisibilityIcon
                            color="info"
                        />
                    </IconButton>

                </td><td>
                    <IconButton
                        aria-label="Update"
                        onClick={() =>
                            this.props.funcion("E", this.props.id,
                                this.props.datosAux)}
                    >
                        <UpdateIcon
                            color="primary"
                        />
                    </IconButton>
                </td><td>
                    <IconButton
                        aria-label="Delete"
                        onClick={() =>
                            this.props.funcion("D", this.props.id,
                                this.props.datosAux)}
                    >
                        <DeleteIcon
                            color="secondary"
                        />
                    </IconButton>
                </td>

            </>
        )
    }
}
TresBotonesListado.propTypes = {
    funcion: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}