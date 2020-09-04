import React from 'react';
import PropTypes from 'prop-types';

export const TextAreaComponent = ({clase='', value = '', name = '', label = '', handleChange, readOnly = true }) => {

    const onFocus = event => {

        if (event.target.autocomplete) {
            event.target.autocomplete = "whatever";
        }

    };

    if (readOnly) {
        return (
            <div className="form-group">
                <div className="input-group">
                    <label className="control-label col-md-2" htmlFor={name}>{label}:</label>
                    <div className="col-md-10">
                        {
                            (name.length > 0) ?
                                <textarea 
                                    className="form-control"
                                    rows="5"
                                    name={name}
                                    value={value}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className={clase}
                                    disabled = {true} /> :
                                <textarea name={name}
                                    rows="5"
                                    autoComplete="off"
                                    value={value}
                                    className={clase}
                                    placeholder={'Ingresa el ' + name}
                                    disabled = {true}/>
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="form-group">
                <div className="input-group">
                    <label
                        className="control-label col-md-2"
                        htmlFor={name}>{label}:</label>
                    <div className="col-md-10">
                        <textarea name={name}
                            rows="5"
                            value={value}
                            autoComplete="off"
                            className={clase}
                            onFocus={onFocus}
                            onChange={handleChange}
                            readOnly={readOnly} />
                    </div>
                </div>
            </div>
        )
    }
}

TextAreaComponent.propTypes = {
    handleChange: PropTypes.func.isRequired
}
