import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Imagen from '../../Fragmentos/Imagen';
import { InputComponent } from '../../Fragmentos/InputComponent';
import { DesplegableDireccion } from '../../Fragmentos/DesplegableDireccion';
import Desplegable from '../../Fragmentos/desplegable';
import { TextAreaComponent } from './TextAreaComponent';
import SubirImagen from '../../Fragmentos/SubirImagen';

export default class FormularioClub extends Component {


    añadirMusica(event) {

        console.log();
    }

    render() {

        let typemusicañadir = '';
        let club = this.props.obj;
        let musicType;
        if (club.Musica) {

            musicType = club.Musica + ", " + typemusicañadir;
        }
        let readonly = false;
        let direccion = club.streetName + " " + club.streetNumber + " " + club.postal_code + " " + club.cityName;
        if (this.props.orden === 'D' || this.props.orden === 'V') readonly = true

        return (
            <div className='container animate__animated animate__fadeIn'>

                {(!readonly) ?
                    <SubirImagen /> : null

                }

                {(club.coverUrl === null) ?
                    <Imagen imageUrl='' with={20} />
                    :
                    <Imagen imageUrl={club.coverUrl} with={20} />
                }
                <div className='container'>
                    <InputComponent name="clubid"
                        handleChange={this.props.funcion}
                        name="clubid"
                        label="ID"
                        readOnly={true}
                        value={club.clubid}
                        clase='elementoFormularioClub' />
                    <br />
                    <br />
                    <hr />
                </div>

                <div className='container'>
                    <div className='row '>

                        {

                            /*CLUBNAME*/
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

                            /*DECSRIPCION DEL CLUB */

                            <div className='col-4'>
                                <TextAreaComponent name="description"
                                    handleChange={this.props.funcion}
                                    name="description"
                                    label="Descripción"
                                    clase='elementoFormularioClub'
                                    readOnly={readonly}
                                    value={club.description} />
                            </div>
                        }







                        {
                            /*TELEFONO DEL CLUB */
                            <div className='col-4'>
                                <InputComponent name="clubPhone"
                                    handleChange={this.props.funcion}
                                    name="clubPhone"
                                    label="Teléfono"
                                    clase='elementoFormularioClub'
                                    readOnly={readonly}
                                    value={club.clubPhone}
                                />
                            </div>
                        }

                    </div>
                    <hr />
                    <div className='row'>



                        {/*DIRECCION COMPLETA DEL CLUB */
                            (readonly) ?
                                <div className='col-4'>
                                    <InputComponent name="direccion"
                                        handleChange={this.props.funcion}
                                        name="direccion"
                                        label="Dirección"
                                        readOnly={readonly}
                                        value={direccion}
                                        clase='elementoFormularioClub'
                                    />
                                </div>
                                : null
                        }


                        {
                            /*NUMERO DE LA DIRECCION DEL CLUB */
                            (!readonly) ?
                                <div className='col-4'>
                                    <InputComponent name="streetNumber"
                                        handleChange={this.props.funcion}
                                        name="streetNumber"
                                        label="Número de la calle"
                                        clase='elementoFormularioClub'
                                        readOnly={readonly}
                                        value={club.streetNumber} />
                                </div> : null

                        }


                        {
                            /*CODIGO POSTAL DEL CLUB */
                            (!readonly) ?
                                <div className='col-4'>
                                    <InputComponent name="postal_code"
                                        handleChange={this.props.funcion}
                                        name="postal_code"
                                        label="Codigo postal"
                                        clase='elementoFormularioClub'
                                        readOnly={readonly}
                                        value={club.postal_code}
                                    />
                                </div> : null
                        }
                        {
                            /*MOSTRAR TIPO DE MUSICA  DEL CLUB */
                            (!readonly) ?
                                <div className='col-4'>
                                    <TextAreaComponent name="Musica"
                                        handleChange={this.props.funcion}
                                        name="Musica"
                                        label="Tipos de musica"
                                        clase='elementoFormularioClub'
                                        readOnly={true}
                                        value={musicType}
                                    />
                                </div> : null
                        }


                    </div>

                    <hr />
                    <div className='row'>

                        {
                            /*EDAD DE ACCESO AL CLUB */
                            <div className='col-4'>
                                <InputComponent name="accessAge"
                                    handleChange={this.props.funcion}
                                    name="accessAge"
                                    label="Edad mínima"
                                    clase='elementoFormularioClub'
                                    type='number'
                                    readOnly={readonly}
                                    value={club.accessAge} />
                            </div>

                        }


                        {
                            /*DIAS DE ANTICIPACION DEL CLUB */
                            <div className='col-4'>
                                <InputComponent name="DiasAnticipacion"
                                    handleChange={this.props.funcion}
                                    name="DiasAnticipacion"
                                    label="Dias Anticipacion"
                                    clase='elementoFormularioClub'
                                    type='number'
                                    readOnly={readonly}
                                    value={club.DiasAnticipacion} />
                            </div>

                        }






                        {

                            /*TIPO DE MÚSICA DEL CLUB */
                            (!readonly) ?
                                <div className='col-4'>
                                    <Desplegable table='n_music' name='music' label='Tipo de música' value={club.music} readValue={this.props.funcion} />

                                </div>
                                :
                                <div className='col-4'>
                                    <InputComponent name="Musica"
                                        handleChange={this.props.funcion}
                                        label="Tipo de música"
                                        clase='elementoFormularioClub'
                                        readOnly={readonly}
                                        value={club.Musica}
                                        clase='elementoFormularioClub' />
                                </div>
                        }

                    </div>
                    <hr />

                    <div className='row'>
                        {
                            /*CODIGO DE VESTIMENTA DEL CLUB */
                            (!readonly) ?
                                <div className='col-4'>
                                    <Desplegable table='n_dresscode' name='dressCodeid' label='Codigo de vestimenta' value={club.dressCodeid} readValue={this.props.funcion} />
                                </div>
                                :
                                <div className='col-4'>
                                    <InputComponent name="dressCodeid"
                                        handleChange={this.props.funcion}
                                        label="Codigo de vestimenta"
                                        readOnly={readonly}
                                        value={club.dressCodeDescription}
                                        clase='elementoFormularioClub' />
                                </div>
                        }


                        {
                            /*COSTO DE ENTRADA AL CLUB */
                            <div className='col-4'>
                                <InputComponent name="entryCost"
                                    handleChange={this.props.funcion}
                                    name="entryCost"
                                    clase='elementoFormularioClub'
                                    label="Coste de entrada"
                                    readOnly={readonly}
                                    value={club.entryCost} />
                            </div>

                        }



                        {

                            /*MAXIMO DE PERSONAS AL CLUB */
                            <div className='col-4'>
                                <InputComponent name="maxPeople"
                                    handleChange={this.props.funcion}
                                    name="maxPeople"
                                    type='number'
                                    clase='elementoFormularioClub'
                                    label="Máximo de personas"
                                    readOnly={readonly}
                                    value={club.maxPeople} />
                            </div>
                        }
                    </div>
                    <hr />
                    <div className='row'>


                        {<div className='row'>


                            <label id='sesionElement' htmlFor={club.openSeason1}>Sesion de apertura 1:</label>
                            {/*TEMPORADAS DEL CLUB (PRINCIPIO)*/
                                (club.openSeason1 === null) ?
                                    <input name="openSeason1"
                                        id='sesionElement'
                                        type="date"
                                        readOnly={readonly} />
                                    :
                                    <input name="openSeason1"
                                        id='sesionElement'
                                        type="date"
                                        value={club.openSeason1.split('T')[0]}
                                        readOnly={readonly} />

                            }
                            <label id='sesionElement' htmlFor={club.closingSeason1}>Sesion de cierre 1:</label>
                            {
                                (club.closingSeason1 === null) ?
                                    <input name="closingSeason1"
                                        id='sesionElement'
                                        type="date"
                                        readOnly={readonly} />
                                    :
                                    <input name="closingSeason1"
                                        type="date"
                                        value={club.closingSeason1.split('T')[0]}
                                        readOnly={readonly} />

                            }
                            <label id='sesionElement' htmlFor={club.openSeason2}>Sesion de apertura 2:</label>
                            {
                                (club.openSeason2 === null) ?
                                    <input name="openSeason2"
                                        id='sesionElement'
                                        type="date"
                                        readOnly={readonly} />
                                    :
                                    <input name="openSeason2"
                                        type="date"
                                        value={club.openSeason2.split('T')[0]}
                                        readOnly={readonly} />

                            }
                            <label id='sesionElement' htmlFor={club.closingSeason2}>Sesion de cierre 2:</label>
                            {
                                (club.closingSeason1 === null) ?
                                    <input name="closingSeason2"
                                        id='sesionElement'
                                        type="date"
                                        readOnly={readonly} />
                                    :
                                    <input name="closingSeason2"
                                        type="date"
                                        value={club.closingSeason2.split('T')[0]}
                                        readOnly={readonly} />

                            }
                            <label id='sesionElement' htmlFor={club.openSeason3}>Sesion de apertura 3:</label>
                            {
                                (club.openSeason3 === null) ?
                                    <input name="openSeason3"
                                        id='sesionElement'
                                        type="date"
                                        readOnly={readonly} />
                                    :
                                    <input name="openSeason3"
                                        type="date"
                                        value={club.openSeason3.split('T')[0]}
                                        readOnly={readonly} />

                            }
                            <label id='sesionElement' htmlFor={club.closingSeason3}>Sesion de cierre 3:</label>
                            {
                                (club.closingSeason3 === null) ?
                                    <input name="closingSeason3"
                                        id='sesionElement'
                                        type="date"
                                        readOnly={readonly} />
                                    :
                                    <input name="closingSeason3"
                                        type="date"
                                        value={club.closingSeason3.split('T')[0]}
                                        readOnly={readonly} />
                                /*TEMPORADAS DEL CLUB (FINAL)*/
                            }
                        </div>}
                    </div>
                    <hr />
                    <div className='row'>

                        {
                            /*LATITUD DEL CLUB */
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
                                /*LONGITUD DEL CLUB */
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
                    </div>
                    <div className='row'>
                        {/*CIUDAD DEL CLUB */
                            (readonly) ?

                                (<div className='col-12'><InputComponent name="cityName"
                                    handleChange={this.props.funcion}
                                    name="cityName"
                                    label="Ciudad"
                                    readOnly={readonly}
                                    value={club.cityName}
                                    clase='elementoFormularioClub'
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


                        {/*EMPRESA DEL CLUB */
                            (!readonly) ?
                                <div className='col-12'>
                                    <label>Empresas</label>
                                    <Desplegable table='companies' name='companyid' value={club.companyid} readValue={this.props.funcion} />
                                </div>
                                :
                                <div className='col-12'>
                                    <InputComponent name="companyName"
                                        handleChange={this.props.funcion}
                                        label="Empresa"
                                        readOnly={readonly}
                                        value={club.companyName}
                                        clase='elementoFormularioClub' />
                                </div>
                        }
                    </div>
                    {
                        /*COMO LLEGAR AL CLUB */
                        <div className='col-4'>
                            <TextAreaComponent name="howToGetThere"
                                handleChange={this.props.funcion}

                                label="Como legar"
                                clase='elementoFormularioClub'
                                readOnly={readonly}
                                value={club.howToGetThere} />
                        </div>
                    }


                </div>
            </div>



        )
    }

}
FormularioClub.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}

