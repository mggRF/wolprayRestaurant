import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Imagen from '../../Fragmentos/Imagen';
import { InputComponent } from '../companies/InputComponent';
import { DesplegableDireccion } from '../../Fragmentos/DesplegableDireccion';
import Desplegable from '../../Fragmentos/desplegable';
import { TextAreaComponent } from './TextAreaComponent';

export default class  FormularioClub extends Component {
    render() {
        let club = this.props.obj;
        console.log("Desde formularioClub el music", club)
        let readonly = false;
        let direccion = club.streetName +" "+club.streetNumber+" "+club.postal_code +" "+club.cityName;
        if (this.props.orden == 'D' || this.props.orden == 'V') readonly = true
        
        return (
            <div>
            <Imagen imageUrl={club.coverUrl} with={20} />
                
                <InputComponent name="clubid" 
                    handleChange={this.props.funcion}
                    name="clubid"
                    label="ID"
                    readOnly={true}
                    value={club.clubid}/>
                
                <InputComponent name="clubName" 
                    handleChange={this.props.funcion}
                    name="clubName"
                    label="Nombre"
                    readOnly={readonly}
                    value={club.clubName}/>

                <TextAreaComponent name="description" 
                    handleChange={this.props.funcion}
                    name="description"
                    label="Descripción"
                    readOnly={readonly}
                    value={club.description}/>

                
                <InputComponent name="clubPhone" 
                    handleChange={this.props.funcion}
                    name="clubPhone"
                    label="Teléfono"
                    readOnly={readonly}
                    value={club.clubPhone}/>
                    {
                        (!readonly) ?

                        <Desplegable table ='companies' name='companyid'  label='Empresas:' value={club.companyid} readValue={this.props.funcion}/>
                        :
                        <InputComponent name="companyName" 
                            handleChange={this.props.funcion}
                            label="Empresa"
                            readOnly={readonly}
                            value={club.companyName}/>
                    }

                
                
            {
                (readonly) ?
                <InputComponent name="direccion" 
                    handleChange={this.props.funcion}
                    name="direccion"
                    label="Dirección"
                    readOnly={readonly}
                    value={direccion}/>:null
            }
                {
                    (!readonly) ?
                    <InputComponent name="streetNumber" 
                    handleChange={this.props.funcion}
                    name="streetNumber"
                    label="Número de la calle"
                    readOnly={readonly}
                    value={club.streetNumber}/>:null

                }
                {
                    (!readonly) ?
                    <InputComponent name="postal_code" 
                        handleChange={this.props.funcion}
                        name="postal_code"
                        label="Codigo postal"
                        readOnly={readonly}
                        value={club.postal_code}/>: null
                }
                {
                    (readonly) ?
                    (<InputComponent name="cityName" 
                        handleChange={this.props.funcion}
                        name="cityName"
                        label="Ciudad"
                        readOnly={readonly}
                        value={club.cityName}
                        />)
                        :
                        (<><DesplegableDireccion
                                    funcion={this.props.funcion}
                                    valorCCAA={club.stateid}
                                    valorProv={club.provinceid}
                                    valorPobl={club.cityid}
                                /></>)

                }

                
                

                <InputComponent name="accessAge" 
                    handleChange={this.props.funcion}
                    name="accessAge"
                    label="Edad mínima"
                    readOnly={readonly}
                    value={club.accessAge}/>

                <InputComponent name="DiasAnticipacion" 
                    handleChange={this.props.funcion}
                    name="DiasAnticipacion"
                    label="Dias Anticipacion"
                    readOnly={readonly}
                    value={club.DiasAnticipacion}/>
                    {
                        (!readonly) ?
                        <Desplegable table ='n_music' name='music' label='Tipo de música' value={club.music} readValue={this.props.funcion}/>
                        :
                        <InputComponent name="music" 
                            handleChange={this.props.funcion}
                            label="Tipo de música"
                            readOnly={readonly}
                            value={club.music}/>
                    }
                    {
                        (!readonly) ?
                        <Desplegable table ='n_dresscode' name='dressCodeid' label='Codigo de vestimenta' value={club.dressCodeid} readValue={this.props.funcion}/>
                        :
                        <InputComponent name="dressCodeid" 
                            handleChange={this.props.funcion}
                            label="Codigo de vestimenta"
                            readOnly={readonly}
                            value={club.dressCodeid}/>
                    }
                

                <InputComponent name="entryCost" 
                    handleChange={this.props.funcion}
                    name="entryCost"
                    label="Coste de entrada"
                    readOnly={readonly}
                    value={club.entryCost}/>

                <InputComponent name="maxPeople" 
                    handleChange={this.props.funcion}
                    name="maxPeople"
                    label="Máximo de personas"
                    readOnly={readonly}
                    value={club.maxPeople}/>
            </div>
            /*


coverUrl: null
howToGetThere: null
latitude: null
longitude: null

            */ 


        )
    }
    
}
FormularioClub.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}