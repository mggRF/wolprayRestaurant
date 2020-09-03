import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Imagen from '../../Fragmentos/Imagen';
import { InputComponent } from '../companies/InputComponent';
import { DesplegableDireccion } from '../../Fragmentos/DesplegableDireccion';
import Desplegable from '../../Fragmentos/desplegable';
import { TextAreaComponent } from './TextAreaComponent';
import SubirImagen from '../../Fragmentos/SubirImagen';
import '../../../styles.css';

export default class  FormularioClub extends Component {

   
    render() {
        let club = this.props.obj;
        console.log("Desde formularioClub el music", club)
        let readonly = false;
        let direccion = club.streetName +" "+club.streetNumber+" "+club.postal_code +" "+club.cityName;
        if (this.props.orden == 'D' || this.props.orden == 'V') readonly = true
        
        return (
            <div className='container'>
            
            {(!readonly) ?
                <SubirImagen />:null

            }

            <Imagen imageUrl={club.coverUrl} with={20} />
            <div className='container'>
            <InputComponent name="clubid" 
                    handleChange={this.props.funcion}
                    name="clubid"
                    label="ID"
                    readOnly={true}
                    value={club.clubid}
                    clase ='elementoFormularioClub'/>
                    <br/>
                    <br/>
                    <hr/>
            </div>
            
            <div className='container'>
            <div className='row'>
            
                {
                    (readonly) ?
                    <div className='col-4'>
                    <InputComponent name="clubName" 
                    handleChange={this.props.funcion}
                    name="clubName"
                    label="Nombre"
                    readOnly={readonly}
                    value={club.clubName}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <InputComponent name="clubName" 
                    handleChange={this.props.funcion}
                    name="clubName"
                    label="Nombre"
                    clase='elementoFormularioClub'
                    readOnly={readonly}
                    value={club.clubName}
                    />
                    </div>
                }
                
                
                {
                    (readonly) ?
                    <div className='col-4'>
                    <TextAreaComponent name="description" 
                    handleChange={this.props.funcion}
                    name="description"
                    label="Descripción"
                    readOnly={readonly}
                    value={club.description}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <TextAreaComponent name="description" 
                    handleChange={this.props.funcion}
                    name="description"
                    label="Descripción"
                    clase ='elementoFormularioClub'
                    readOnly={readonly}
                    value={club.description}/>
                    </div>
                }
                


               
               
                
                
                {
                    (readonly) ?
                    <div className='col-4'>
                    <InputComponent name="clubPhone" 
                    handleChange={this.props.funcion}
                    name="clubPhone"
                    label="Teléfono"
                    readOnly={readonly}
                    value={club.clubPhone}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <InputComponent name="clubPhone" 
                    handleChange={this.props.funcion}
                    name="clubPhone"
                    label="Teléfono"
                    clase ='elementoFormularioClub'
                    readOnly={readonly}
                    value={club.clubPhone}
                    />
                    </div>
                }
                
                
                    

                
                
            {
                (readonly) ?
                <div className='col-4'>
                <InputComponent name="direccion" 
                    handleChange={this.props.funcion}
                    name="direccion"
                    label="Dirección"
                    readOnly={readonly}
                    value={direccion}
                    clase ='elementoFormularioClub'
                    />
                    </div>
                    :null
            }
                
                
                {
                    (!readonly) ?
                    <div className='col-4'>
                    <InputComponent name="streetNumber" 
                    handleChange={this.props.funcion}
                    name="streetNumber"
                    label="Número de la calle"
                    clase ='elementoFormularioClub'
                    readOnly={readonly}
                    value={club.streetNumber}/>
                    </div>:null

                }
                
                
                {
                    (!readonly) ?
                    <div className='col-4'>
                    <InputComponent name="postal_code" 
                        handleChange={this.props.funcion}
                        name="postal_code"
                        label="Codigo postal"
                        clase ='elementoFormularioClub'
                        readOnly={readonly}
                        value={club.postal_code}
                        />
                        </div>: null
                }
                
                
                

                
                
                {
                    (readonly) ?
                    <div className='col-4'>
                    <InputComponent name="accessAge" 
                    handleChange={this.props.funcion}
                    name="accessAge"
                    label="Edad mínima"
                    type='number'
                    readOnly={readonly}
                    value={club.accessAge}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <InputComponent name="accessAge" 
                    handleChange={this.props.funcion}
                    name="accessAge"
                    label="Edad mínima"
                    clase ='elementoFormularioClub'
                    type='number'
                    readOnly={readonly}
                    value={club.accessAge}/>
                    </div>

                }
                
                
                {
                    (readonly) ?
                    <div className='col-4'>
                    <InputComponent name="DiasAnticipacion" 
                    handleChange={this.props.funcion}
                    name="DiasAnticipacion"
                    label="Dias Anticipacion"
                    type='number'
                    readOnly={readonly}
                    value={club.DiasAnticipacion}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <InputComponent name="DiasAnticipacion" 
                    handleChange={this.props.funcion}
                    name="DiasAnticipacion"
                    label="Dias Anticipacion"
                    clase ='elementoFormularioClub'
                    type='number'
                    readOnly={readonly}
                    value={club.DiasAnticipacion}/>
                    </div>

                }
                
                
                
                

                
                    {
                        (!readonly) ?
                        <div className='col-4'>
                        <Desplegable table ='n_music' name='music' label='Tipo de música' value={club.music} readValue={this.props.funcion}/>
                        </div>
                        :
                        <div className='col-4'>
                        <InputComponent name="music" 
                            handleChange={this.props.funcion}
                            label="Tipo de música"
                            clase ='elementoFormularioClub'
                            readOnly={readonly}
                            value={club.Musica}
                            clase ='elementoFormularioClub'/>
                            </div>
                    }
                    
                    
                    {
                        (!readonly) ?
                        <div className='col-4'>
                        <Desplegable table ='n_dresscode' name='dressCodeid' label='Codigo de vestimenta' value={club.dressCodeid} readValue={this.props.funcion}/>
                        </div>
                        :
                        <div className='col-4'>
                        <InputComponent name="dressCodeid" 
                            handleChange={this.props.funcion}
                            label="Codigo de vestimenta"
                            readOnly={readonly}
                            value={club.dressCodeDescription}
                            clase ='elementoFormularioClub' />
                            </div>
                    }
                    
                    
                {
                    (readonly) ?
                    <div className='col-4'>
                    <InputComponent name="entryCost" 
                    handleChange={this.props.funcion}
                    name="entryCost"
                    label="Coste de entrada"
                    readOnly={readonly}
                    value={club.entryCost}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <InputComponent name="entryCost" 
                    handleChange={this.props.funcion}
                    name="entryCost"
                    clase ='elementoFormularioClub'
                    label="Coste de entrada"
                    readOnly={readonly}
                    value={club.entryCost}/>
                    </div>

                }
                

                
                {
                    (readonly) ?
                    <div className='col-4'>
                    <InputComponent name="maxPeople" 
                    handleChange={this.props.funcion}
                    name="maxPeople"
                    type='number'
                    label="Máximo de personas"
                    readOnly={readonly}
                    value={club.maxPeople}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <InputComponent name="maxPeople" 
                    handleChange={this.props.funcion}
                    name="maxPeople"
                    type='number'
                    clase ='elementoFormularioClub'
                    label="Máximo de personas"
                    readOnly={readonly}
                    value={club.maxPeople}/>
                    </div>
                }
                
                {
                    (readonly) ?
                    <div className='col-4'>
                    <TextAreaComponent name="howToGetThere" 
                    handleChange={this.props.funcion}
                    
                    label="Como llegar"
                    readOnly={readonly}
                    value={club.howToGetThere}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <TextAreaComponent name="howToGetThere" 
                    handleChange={this.props.funcion}
                    
                    label="Como legar"
                    clase ='elementoFormularioClub'
                    readOnly={readonly}
                    value={club.howToGetThere}/>
                    </div>
                }
                
                
                
                {<div className='row'>
                
                <label  id='sesionElement' htmlFor={club.openSeason1 }>Sesion de apertura 1:</label>
                {
                    (club.openSeason1 ===null)?
                    <input name="openSeason1"
                    id='sesionElement'
                    type ="date"
                    readOnly={readonly} />
                    :
                    <input name="openSeason1"
                    id='sesionElement'
                    type ="date" 
                    value={club.openSeason1.split('T')[0]} 
                    readOnly={readonly} />
                   
                }
                <label  id='sesionElement' htmlFor={club.closingSeason1 }>Sesion de cierre 1:</label>
                {
                    (club.closingSeason1 ===null)?
                    <input name="closingSeason1"
                    id='sesionElement'
                    type ="date"
                    readOnly={readonly} />
                    :
                    <input name="closingSeason1"
                    type ="date" 
                    value={club.closingSeason1.split('T')[0]} 
                    readOnly={readonly} />
                   
                }
                <label  id='sesionElement' htmlFor={club.openSeason2 }>Sesion de apertura 2:</label>
                {
                    (club.openSeason2 ===null)?
                    <input name="openSeason2"
                    id='sesionElement'
                    type ="date"
                    readOnly={readonly} />
                    :
                    <input name="openSeason2"
                    type ="date" 
                    value={club.openSeason2.split('T')[0]} 
                    readOnly={readonly} />
                   
                }
                <label  id='sesionElement' htmlFor={club.closingSeason2 }>Sesion de cierre 2:</label>
                {
                    (club.closingSeason1 ===null)?
                    <input name="closingSeason2"
                    id='sesionElement'
                    type ="date"
                    readOnly={readonly} />
                    :
                    <input name="closingSeason2"
                    type ="date" 
                    value={club.closingSeason2.split('T')[0]} 
                    readOnly={readonly} />
                   
                }
                <label  id='sesionElement' htmlFor={club.openSeason3 }>Sesion de apertura 3:</label>
                {
                    (club.openSeason3 ===null)?
                    <input name="openSeason3"
                    id='sesionElement'
                    type ="date"
                    readOnly={readonly} />
                    :
                    <input name="openSeason3"
                    type ="date" 
                    value={club.openSeason3.split('T')[0]} 
                    readOnly={readonly} />
                   
                }
                <label  id='sesionElement' htmlFor={club.closingSeason3 }>Sesion de cierre 3:</label>
                {
                    (club.closingSeason3 ===null)?
                    <input name="closingSeason2"
                    id='sesionElement'
                    type ="date"
                    readOnly={readonly} />
                    :
                    <input name="closingSeason2"
                    type ="date" 
                    value={club.closingSeason3.split('T')[0]} 
                    readOnly={readonly} />
                   
                }
                </div>}

                {
                    (readonly) ?
                    <div className='col-4'>
                    <InputComponent name="latitude" 
                    handleChange={this.props.funcion}
                    name="latitude"
                    label="Latitude"
                    readOnly={readonly}
                    value={club.latitude}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-4'>
                    <InputComponent name="latitude" 
                    handleChange={this.props.funcion}
                    name="latitude"
                    label="Latitude"
                    clase='elementoFormularioClub'
                    readOnly={readonly}
                    value={club.latitude}
                    />
                    </div>
                }
                
                <div className='row'>
                {
                    (readonly) ?
                    
                    <div className='col-2'>
                    <InputComponent name="latitude" 
                    handleChange={this.props.funcion}
                    name="latitude"
                    label="Latitude"
                    readOnly={readonly}
                    value={club.latitude}
                    clase ='elementoFormularioClub'/>
                    </div>
                    :
                    <div className='col-10'>
                    <InputComponent name="longitude" 
                    handleChange={this.props.funcion}
                    name="longitude"
                    label="Longitude"
                    clase='elementoFormularioClub'
                    readOnly={readonly}
                    value={club.longitude}
                    />
                    </div>
                    
                }</div>
                <div className='row'>
                {
                    (readonly) ?
                    
                    (<div className='col-12'><InputComponent name="cityName" 
                        handleChange={this.props.funcion}
                        name="cityName"
                        label="Ciudad"
                        readOnly={readonly}
                        value={club.cityName}
                        clase ='elementoFormularioClub'
                        /></div>)
                        
                        :
                        (<div className='col-12'><DesplegableDireccion
                                    funcion={this.props.funcion}
                                    valorCCAA={club.stateid}
                                    valorProv={club.provinceid}
                                    valorPobl={club.cityid}
                                /></div>)

                }
                
                </div>

                <div className='row'>
                
                
                    {
                        (!readonly) ?
                        <div className='col-12'>
                        <label>Empresas</label>
                        <Desplegable table ='companies' name='companyid'   value={club.companyid} readValue={this.props.funcion}/>
                        </div>
                        :
                        <div className='col-12'>
                        <InputComponent name="companyName" 
                            handleChange={this.props.funcion}
                            label="Empresa"
                            readOnly={readonly}
                            value={club.companyName}
                            clase ='elementoFormularioClub'/>
                            </div>
                    }
                    </div>
                    
                    </div>
                    </div>
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