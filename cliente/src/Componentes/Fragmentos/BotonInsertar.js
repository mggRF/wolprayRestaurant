import React, { Component } from 'react';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import IconButton from '@material-ui/core/IconButton'


export default class BotonInsertar extends Component {
    render() {
        return (
            <>              
                {' '}
                <IconButton
                    aria-label="InsertComment"
                    onClick={() =>
                        this.props.funcion("V", this.props.id,
                            this.props.datosAux)}
                >
                    <InsertCommentIcon
                        color="primary"
                    />
                </IconButton>
                
            </>
        )
    }
}