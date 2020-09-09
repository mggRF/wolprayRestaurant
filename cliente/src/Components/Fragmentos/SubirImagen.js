
import React, { Component } from 'react';
export default class SubirImagen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    render() {
        return (
            <div className="form-field col-lg-6">
                <div className="form-group">
                    <label className="label" >Imagen del club</label>
                    <input className="form-control" type="file" onChange={this.fileSelectedHandler} />
                </div>
            </div>
        );
    }
}

