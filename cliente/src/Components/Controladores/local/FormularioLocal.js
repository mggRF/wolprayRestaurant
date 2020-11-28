import React from 'react';
import { InputComponent } from '../../Fragmentos/InputComponent';
import { DesplegableDireccion } from '../../Fragmentos/DesplegableDireccion';
import DesplegableAut from './../../Fragmentos/DesplegableAut';

export const FormularioLocal = ({ obj, orden, funcion }) => {

    let readonly = false;
    let direccion = '';

    if (orden === 'D' || orden === 'V') {
        readonly = true;
        direccion = `${obj.locStreet}, ${obj.locNumber}, ${obj.locCPostal}, ${obj.cityName}, ${obj.provinceName}, ${obj.stateName}, ${obj.countryName}`;
    }

    return (
        <section className="get_in_touch animate__animated animate__fadeIn">
            <h1 className="title">Formulario Local</h1>
            <div className="container">
                <form className="formulario row">
                    <div className="container">
                      
                    </div>
                    {
                        (readonly) ?
                            <InputComponent
                                type='text'
                                value={obj.idLocals}
                                name='idLocals'
                                label='Local ID'
                                handleChange={funcion}
                                readOnly={readonly}
                            /> : null
                    }
                    <InputComponent
                        type='text'
                        value={obj.locName}
                        name='locName'
                        label='Nombre'
                        handleChange={funcion}
                        readOnly={readonly}
                    />

                    <DesplegableAut

                        name='idCompany'
                        table='companies'
                        label='Compañía '
                        readValue={funcion}
                        idvalue={Number(obj.idCompany)}
                        value={obj.companyName}
                        readonly={readonly}
                    />
                    <InputComponent
                        type='text'
                        value={obj.locPhone}
                        name='locPhone'
                        label='Teléfono'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    <InputComponent
                        type='textarea'
                        value={obj.locDescription}
                        name='locDescription'
                        label='Descripción'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    
                    <InputComponent
                        type='text'
                        value={obj.locPath}
                        name='locPath'
                        label='Como llegar'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    <InputComponent
                        type='number'
                        value={obj.locMaxPeopleInt}
                        name='locMaxPeopleInt'
                        label='Aforo máximo interior'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    <InputComponent
                        type='number'
                        value={obj.locMaxPeopleExt}
                        name='locMaxPeopleExt'
                        label='Aforo máximo terrazas'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    
                    {
                        (readonly) ?
                            <InputComponent
                                type='textarea'
                                value={direccion}
                                name='direccion'
                                label='Dirección'
                                handleChange={funcion}
                            /> :

                            <DesplegableDireccion
                                funcion={funcion}
                                valorCCAA={Number(obj.stateid)}
                                valorProv={Number(obj.provinceid)}
                                valorPobl={Number(obj.idCity)}
                            />


                    }
                    
                </form>
            </div>
        </section>
    )
}
