import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Imagen from '../../Fragmentos/Imagen';
import { InputComponent } from '../../Fragmentos/InputComponent';
import { DesplegableDireccion } from '../../Fragmentos/DesplegableDireccion';
import Desplegable from '../../Fragmentos/desplegable';
import { TextAreaComponent } from '../../Fragmentos/TextAreaComponent';
import SubirImagen from '../../Fragmentos/SubirImagen';
import ListaCheckBox from '../../Fragmentos/ListaCheckBox';

export default class FormularioClub extends Component {


    constructor(props) {
        super(props);
        this.anadirMusica = this.anadirMusica.bind(this);

    }

    anadirMusica(musicsId) {
        let e = {
            target: {
                name: 'musicsUpdate',
                value: musicsId.join(',')
            }

        }
        this.props.funcion(e);
        console.log("DESDE añadir musica", e)

        console.log(musicsId);
    }

    render() {
        let club = this.props.obj;
        let readonly = false;
        let direccion = club.streetName + " " + club.streetNumber + " " + club.postal_code + " " + club.cityName;
        if (this.props.orden === 'D' || this.props.orden === 'V') readonly = true

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Formulario club</h1>
                <div className="container">
                    <form className="formulario row">
                        <div className = "container">
                            {(!readonly) ?
                                <SubirImagen obj = {club} /> : null

                            }
                            <Imagen imageUrl={club.coverUrl} with={20} />
                        </div>

                        {
                                (club.clubid) ?
                                    <InputComponent name="clubid"
                                        handleChange={this.props.funcion}

                                        label="ID"
                                        readOnly={true}
                                        value={club.clubid} /> : null
                        }
                        {

                            /*CLUBNAME*/
                            <InputComponent name="clubName"
                                handleChange={this.props.funcion}
                                label="Nombre"
                                readOnly={readonly}
                                value={club.clubName}
                            />
                        }


                        {

                            /*DECSRIPCION DEL CLUB */
                            <TextAreaComponent name="description"
                                handleChange={this.props.funcion}

                                label="Descripción"
                                readOnly={readonly}
                                value={club.description} />
                        }

                        {
                            /*TELEFONO DEL CLUB */

                            <InputComponent name="clubPhone"
                                handleChange={this.props.funcion}
                                label="Teléfono"
                                readOnly={readonly}
                                value={club.clubPhone}
                            />
                        }

                        {/*DIRECCION COMPLETA DEL CLUB */
                            (readonly) ?
                                <InputComponent name="direccion"
                                    handleChange={this.props.funcion}
                                    label="Dirección"
                                    readOnly={readonly}
                                    value={direccion}
                                /> : null
                        }
                        {
                            /*NOMBRE DE LA DIRECCION DEL CLUB */
                            (!readonly) ?
                                <InputComponent name="streetNumber"
                                    handleChange={this.props.funcion}

                                    label="Nombre de la calle"
                                    readOnly={readonly}
                                    value={club.streetName} /> : null
                        }

                        {
                            /*NUMERO DE LA DIRECCION DEL CLUB */
                            (!readonly) ?
                                <InputComponent name="streetNumber"
                                    handleChange={this.props.funcion}

                                    label="Número de la calle"
                                    readOnly={readonly}
                                    value={club.streetNumber} /> : null
                        }


                        {
                            /*CODIGO POSTAL DEL CLUB */
                            (!readonly) ?
                                <InputComponent name="postal_code"
                                    handleChange={this.props.funcion}

                                    label="Codigo postal"
                                    readOnly={readonly}
                                    value={club.postal_code}
                                /> : null
                        }
                        {
                            (club.Musica) ?

                                <ListaCheckBox name="Musica"
                                    table='n_music'
                                    readValue={this.anadirMusica}
                                    label="Tipos de musica"
                                    activos={club.Musica}
                                />

                                :

                                <ListaCheckBox name="Musica"
                                    table='n_music'
                                    readValue={this.anadirMusica}
                                    label="Tipos de musica"
                                    activos=""
                                />

                        }

                        <hr />


                        {
                            /*EDAD DE ACCESO AL CLUB */

                            <InputComponent name="accessAge"
                                handleChange={this.props.funcion}
                                label="Edad mínima"
                                type='number'
                                readOnly={readonly}
                                value={club.accessAge} />


                        }


                        {
                            /*DIAS DE ANTICIPACION DEL CLUB */

                            <InputComponent name="DiasAnticipacion"
                                handleChange={this.props.funcion}

                                label="Dias Anticipacion"
                                type='number'
                                readOnly={readonly}
                                value={club.DiasAnticipacion} />


                        }
                        {

                            /*TIPO DE MÚSICA DEL CLUB */
                            /*(!readonly) ?
                                null
                                :
                                <InputComponent name="Musica"
                                    handleChange={this.props.funcion}
                                    label="Tipo de música"
                                    readOnly={readonly}
                                    value={club.Musica}
                                />

                        */}

                        <hr />


                        {
                            /*CODIGO DE VESTIMENTA DEL CLUB */
                            (!readonly) ?

                                <Desplegable table='n_dresscode' name='dressCodeid' label='Codigo de vestimenta' value={club.dressCodeid} readValue={this.props.funcion} />

                                :

                                <InputComponent name="dressCodeid"
                                    handleChange={this.props.funcion}
                                    label="Codigo de vestimenta"
                                    readOnly={readonly}
                                    value={club.dressCodeDescription} />

                        }


                        {
                            /*COSTO DE ENTRADA AL CLUB */

                            <InputComponent name="entryCost"
                                handleChange={this.props.funcion}

                                label="Coste de entrada"
                                readOnly={readonly}
                                value={club.entryCost} />


                        }



                        {

                            /*MAXIMO DE PERSONAS AL CLUB */

                            <InputComponent name="maxPeople"
                                handleChange={this.props.funcion}

                                type='number'
                                label="Máximo de personas"
                                readOnly={readonly}
                                value={club.maxPeople} />

                        }

                        <hr />

                        {<>

                            {/*TEMPORADAS DEL CLUB (PRINCIPIO)*/
                                (club.openSeason1 === null) ?
                                    <InputComponent name="openSeason1"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de apertura 1"
                                        readOnly={readonly}
                                    />
                                    :
                                    <InputComponent name="openSeason1"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de apertura 1"
                                        readOnly={readonly}
                                        value={club.openSeason1.split('T')[0]} />

                            }
                            {
                                (club.closingSeason1 === null) ?


                                    <InputComponent name="closingSeason1"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de cierre 1"
                                        readOnly={readonly}
                                    />
                                    :
                                    <InputComponent name="closingSeason1"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de cierre 1"
                                        readOnly={readonly}
                                        value={club.closingSeason1.split('T')[0]} />

                            }
                            {
                                (club.openSeason2 === null) ?
                                    <InputComponent name="openSeason2"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de apertura 2"
                                        readOnly={readonly}
                                    />
                                    :
                                    <InputComponent name="openSeason2"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de apertura 2"
                                        readOnly={readonly}
                                        value={club.openSeason2.split('T')[0]} />

                            }
                            {
                                (club.closingSeason2 === null) ?
                                    <InputComponent name="closingSeason2"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de cierre 2"
                                        readOnly={readonly}
                                    />
                                    :
                                    <InputComponent name="closingSeason2"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de cierre 2"
                                        readOnly={readonly}
                                        value={club.closingSeason2.split('T')[0]} />

                            }
                            {
                                (club.openSeason3 === null) ?
                                    <InputComponent name="openSeason3"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de apertura 3"
                                        readOnly={readonly}
                                    />
                                    :
                                    <InputComponent name="openSeason3"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de apertura 3"
                                        readOnly={readonly}
                                        value={club.openSeason3.split('T')[0]} />

                            }
                            {
                                (club.closingSeason3 === null) ?
                                    <InputComponent name="closingSeason3"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de cierre 3"
                                        readOnly={readonly}
                                    />
                                    :
                                    <InputComponent name="closingSeason3"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Sesion de cierre 3"
                                        readOnly={readonly}
                                        value={club.closingSeason3.split('T')[0]} />
                                /*TEMPORADAS DEL CLUB (FINAL)*/
                            }
                        </>}



                        {
                            /*LATITUD DEL CLUB */

                            <InputComponent name="latitude"
                                handleChange={this.props.funcion}
                                label="Latitude"
                                readOnly={readonly}
                                value={club.latitude}
                            />

                        }
                        {
                            /*LONGITUD DEL CLUB */
                            <InputComponent name="longitude"
                                handleChange={this.props.funcion}
                                label="Longitude"
                                readOnly={readonly}
                                value={club.longitude}
                            />

                        }


                        {/*CIUDAD DEL CLUB */
                            (readonly) ?
                                <InputComponent name="cityName"
                                    handleChange={this.props.funcion}

                                    label="Ciudad"
                                    readOnly={readonly}
                                    value={club.cityName}
                                /> :
                                <DesplegableDireccion
                                    funcion={this.props.funcion}
                                    valorCCAA={club.stateid}
                                    valorProv={club.provinceid}
                                    valorPobl={club.cityid}
                                />

                        }

                        {/*EMPRESA DEL CLUB */
                            (!readonly) ?
                                <Desplegable
                                    label='Empresa'
                                    table='companies'
                                    name='companyid'
                                    value={club.companyid}
                                    readValue={this.props.funcion} />

                                :
                                <InputComponent name="companyName"
                                    handleChange={this.props.funcion}
                                    label="Empresa"
                                    readOnly={readonly}
                                    value={club.companyName} />

                        }

                        {
                            /*COMO LLEGAR AL CLUB */

                            <TextAreaComponent name="howToGetThere"
                                handleChange={this.props.funcion}
                                label="Como llegar"
                                readOnly={readonly}
                                value={club.howToGetThere} />

                        }
                    </form>
                </div>
            </section>
        )
    }

}
FormularioClub.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func,
}

