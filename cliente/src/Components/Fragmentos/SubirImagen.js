
import React, { Component } from 'react';
export default class SubirImagen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedFile:null
         };
    }
    fileSelectedHandler = event =>{
        this.setState({
            selectedFile:event.target.files[0]
        })
    }
    
    render() {
        return (
            <div>
            <br/>
            <br/>
            <br/>
             <input type="file" onChange={this.fileSelectedHandler} />
            <br/>
            <br/>
            <br/>
            </div>
            
        );
    }
}

