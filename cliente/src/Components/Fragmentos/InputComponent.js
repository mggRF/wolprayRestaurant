import React from 'react';
import PropTypes from 'prop-types';


/**
 * Genera un input para un formulario.
 * 
 * @param {*} clase     clase de estilo para el input 
 * @param {*} tam       tamaño del with para el input 
 * @param {*} step      step del input
 * @param {*} type      tipo de input
 * @param {*} value     valor por defecto del input
 * @param {*} name      nombre del campo del input
 * @param {*} label     texto del label
 * @param {*} handleChange     función onChange del input
 * @param {*} readOnly     determina si el input es solo para leer o no
 */
export const InputComponent = ({ clase = 'input-text', tam = '', step = '', type = 'text', value = '', name = '', label = '', handleChange, readOnly = true }) => {


    const onFocus = event => {

        if (event.target.autocomplete) {
            event.target.autocomplete = "whatever";
        }

    };

    if (value === null || value === undefined) {
        value = '';
    }

    if (type === 'textarea') {
        return (
            <div className="form-field col-lg-6">
                <label className="label" htmlFor={name}><h5>{label}:</h5></label>

                {
                    (!readOnly) ?
                        <textarea name={name}
                            step={step}
                            style={{ width: 250 , height: 70 , resize: 'none'}}
                            autoComplete="off"
                            className={clase}
                            readonly={readOnly}

                            onChange={handleChange}
                            placeholder={'Ingresa el ' + name}
                        >
                        {value}
                        </textarea>
                        :
                        <textarea
                            name={name}
                            step={step}
                            style={{ width: 250 , height: 70, resize: 'none'}}
                            autoComplete="off"
                            className="form-control"
                            readonly={readOnly}
                            
                            onFocus={onFocus}
                        >
                        {value}
                        </textarea>
                }
            </div>
        )

    } else {
        return (
            <div className="form-field col-lg-6">
                <label className="label" htmlFor={name}><h5>{label}:</h5></label>
                {
                    (!readOnly) ?
                        <input 
                            name={name}
                            style={{ width: 250 }}
                            step={step}
                            type={type}
                            autoComplete="off"
                            value={value}
                            className={clase}
                            onChange={handleChange}

                            placeholder={'Ingresa el ' + name}
                            
                        /> :
                        <input
                            name={name}
                            style={{ width: 250 }}
                            step={step}
                            type={type}
                            autoComplete="off"
                            value={value}
                            className="form-control"
                            readonly={readOnly}
                           
                            onFocus={onFocus}                            
                        />
                }
            </div>
        )
    }
}

InputComponent.propTypes = {
    handleChange: PropTypes.func.isRequired
}
