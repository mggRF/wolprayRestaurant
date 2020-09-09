import React from 'react';
import PropTypes from 'prop-types';

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
