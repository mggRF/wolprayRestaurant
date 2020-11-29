import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Desplegable from './Desplegable';
import { InputComponent } from './InputComponent';

/**
 * Presenta un desplegable o una caja de texto segun
 * este en modo lectura o no
 */
export default class DesplegableAut extends Component {
    static defaultProps = {
        value: '',
        idValue:'',
        depend: ''
    }

    render() {

        return (
            <>
            
                {
                    (!this.props.readOnly) ?
                        <Desplegable
                            name={this.props.name}
                            table={this.props.table}
                            label= {'Seleccione uno ...(' + this.props.label +")"}
                            readValue={this.props.readValue}
                            value={Number(this.props.idvalue)}
                            depend={this.props.depend}
                        /> :
                        <InputComponent
                            type='text'
                            value={this.props.value}
                            name={this.props.name}
                            label={this.props.label}
                            
                            readOnly={true}
                        />
                }
            </>
        )
    }
}

DesplegableAut.propTypes = {
    readValue: PropTypes.func,
    label: PropTypes.string,
    table: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired

}