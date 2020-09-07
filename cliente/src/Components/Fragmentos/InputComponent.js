import React from 'react';
import PropTypes from 'prop-types';

export const InputComponent = ({clase = '',tam='',step ='', type='default', value = '', name = '', label = '', handleChange, readOnly = true }) => {

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
                            
                                <input
                                    style={{with:tam}}
                                    step ={step}
                                    type = {type}
                                    className={clase}
                                    name={name}
                                    value={value}
                                    onChange={handleChange}
                                    autoComplete="off"
                                   // className="form-control"
                                    disabled = {true} /> :
                                <input name={name}
                                    style={{with:tam}}
                                    step ={step}
                                    type = {type}
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
                        <input name={name}
                            style={{with:tam}}
                            step ={step}
                            type = {type}
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

InputComponent.propTypes = {
    handleChange: PropTypes.func.isRequired
}
