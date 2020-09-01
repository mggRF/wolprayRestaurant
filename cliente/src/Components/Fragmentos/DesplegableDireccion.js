import React from 'react'
import Desplegable from './desplegable'

export const DesplegableDireccion = (props) => {

    return (
        <>
            <Desplegable label="Comunidad autonoma"
                readValue={props.funcion}
                table='c_state'
                value={props.valor1}
                depend={props.depend1}
                name="stateid" />
            <Desplegable label="Provincia"
                readValue={props.funcion}
                table='c_provinces'
                value={props.valor2}
                depend={props.depend2}
                name="provinceid" />
            <Desplegable label="Poblacion"
                readValue={props.funcion}
                table='c_city'
                value={props.valor3}
                depend={props.depend3}
                name="cityid" />
        </>
    )
}
