import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Imagen from '../../Fragmentos/Imagen';

export default class  FormularioClub extends Component {
    render() {
        let club = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false


        if(this.props.orden === "V"){
            return(
                <div className="container homepage " >
                <div className="container jumbotron text-center page-header">
                <br/>
                <Imagen imageUrl = {club.coverUrl}/>
                <br/>
                <h1>{club.clubName.toUpperCase()}</h1>
                <br/>
                <h6>{club.description.toUpperCase()}</h6>
                <br/>
                <br/>
                </div>
                   <div className = "row">
                   <div className = "col-4 ">
                   <div > <h5>ID: {club.clubid} </h5></div>
                   <div> <h6>Dirección: </h6> </div>
                   <div > <h6>Número de teléfono: </h6> </div>
                   </div>
                   <div className = "col-8 ">
                   <div > <h5>DETALLES</h5></div> 
                   <h6>{club.streetName.toUpperCase()}, {club.streetNumber}, {club.postal_code}</h6>
                   <h6>{club.clubPhone}</h6>
                   </div>
                   </div>
                </div>
            )

        }
        
        return (
            <div>
                <label htmlFor="clubid">Id</label>
                <input name="clubid" 
                    value={club.clubid } 
                    onChange={this.props.funcion} 
                    readOnly="ON"/>
                <label htmlFor="clubName">Name</label>
                <input name="clubName" 
                    value={club.clubName} 
                    onChange={this.props.funcion} 
                    readOnly={readonly} />
            </div>


        )
    }
    
}
FormularioClub.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}