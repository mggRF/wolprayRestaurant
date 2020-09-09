import React from 'react';
import PropTypes from 'prop-types';

export const TextAreaComponent = ({ clase = '', value = '', name = '', label = '', handleChange, readOnly = true }) => {

    const onFocus = event => {

        if (event.target.autocomplete) {
            event.target.autocomplete = "whatever";
        }

    };

    if (readOnly) {
        return (
            <div className="form-field form-group col-lg-10 break">
                <label className="label" htmlFor={name}><h3>{label}:</h3></label><br/>
                {
                    (name.length > 0) ?
                        <textarea

                            rows="5"
                            name={name}
                            value={value}
                            onChange={handleChange}
                            autoComplete="off"
                            className="form-control"
                            disabled={true} /> :
                        <textarea name={name}
                            rows="5"
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
            <div className="form-field form-group col-lg-10 break">

                <label
                    className="label"
                    htmlFor={name}><h3>{label}:</h3></label>

                <textarea name={name}
                    rows="5"
                    value={value}
                    autoComplete="off"
                    className= 'form-control'
                    onFocus={onFocus}
                    onChange={handleChange}
                    readOnly={readOnly} />
            </div>
        )
    }
}

TextAreaComponent.propTypes = {
    handleChange: PropTypes.func.isRequired
}
