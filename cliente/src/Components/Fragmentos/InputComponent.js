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
export const InputComponent = ({ clase = 'input-text', tam = '', step = '', type = 'default', value = '', name = '', label = '', handleChange, readOnly = true }) => {

    const onFocus = event => {

        if (event.target.autocomplete) {
            event.target.autocomplete = "whatever";
        }

    };

    if(value === null || value === undefined){
        value = '';
    }

    if (readOnly) {
        return (
            <div className="form-field col-lg-6">
                <label className="label" htmlFor={name}><h3>{label}:</h3></label>

                {
                    (name.length > 0) ?

                        <input
                            style={{ with: tam }}
                            step={step}
                            type={type}
                            className={clase}
                            name={name}
                            value={value}
                            onChange={handleChange}
                            autoComplete="off"
                            // className="form-control"
                            disabled={true} /> :
                        <input name={name}
                            style={{ with: tam }}
                            step={step}
                            type={type}
                            autoComplete="off"
                            value={value}
                            className={clase}
                            placeholder={'Ingresa el ' + name}
                            disabled={true} />
                }

            </div>
        )
    } else {
        return (
            <div className="form-field col-lg-6">

                <label
                    className="label"
                    htmlFor={name}><h3>{label}:</h3></label>

                <input name={name}
                    style={{ with: tam }}
                    step={step}
                    type={type}
                    value={value}
                    autoComplete="off"
                    className={clase}
                    onFocus={onFocus}
                    onChange={handleChange}
                    readOnly={readOnly} />
            </div>
        )
    }
}

InputComponent.propTypes = {
    handleChange: PropTypes.func.isRequired
}
