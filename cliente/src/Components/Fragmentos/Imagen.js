import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Noimage from '../Comun/images/noimage.jpg';


export default class Imagen extends Component {

    render() {//Components\Comun\images
        if(this.props.imageUrl != null){
            return (
                <div className="img-rounded" >
                    <img src={this.props.imageUrl} alt ="No se ha encontrado la imagen" width={this.props.with+'%'}  /> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                
                 
                    );
        }else{
            return (
                <div className="img-rounded">
                    <img src={Noimage} alt ="No se ha encontrado la imagen"  /> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                
                 
             );

        }
        
    }
}
Imagen.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    with:PropTypes.number
}

