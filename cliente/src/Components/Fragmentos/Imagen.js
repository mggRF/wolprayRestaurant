import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Noimage from '../Comun/images/noimage.jpg';


export default class Imagen extends Component {
    constructor(props) {
        super(props);
        

        
       
    }
    

    render() {//Components\Comun\images
        if(this.props.imageUrl != null){
            return (
                <div className="img-rounded">
                    <img src={this.props.imageUrl} alt ="No se ha encontrado la imagen" class="img-rounded"  /> 
                </div>
                
                 
                    );
        }else{
            return (
                <div className="img-rounded">
                    <img src={Noimage} alt ="No se ha encontrado la imagen"  /> 
                </div>
                
                 
             );

        }
        
    }
}
Imagen.propTypes = {
    imageUrl: PropTypes.string
}

