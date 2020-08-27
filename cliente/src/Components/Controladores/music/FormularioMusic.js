import React, { Component } from 'react'
import PropTypes from 'prop-types'




export default class FormularioMusic extends Component {
    render() {
        let music = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false

        return (
            <div>
                <label htmlFor="musicid">Id</label>
                <input name="musicid" 
                    value={music.musicid} 
                    onChange={this.props.funcion} 
                    readOnly="ON "/>
                <label htmlFor="musicName">Name</label>
                <input name="musicName" 
                    value={music.musicName} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
            </div>


        )
    }
}

FormularioMusic.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}