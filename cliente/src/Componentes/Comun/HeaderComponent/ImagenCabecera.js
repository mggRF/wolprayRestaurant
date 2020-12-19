import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Gastromundo-1-1024x875.png';
import Estilo from '../headerstyle.module.css';

export const ImagenCabecera = () => {

    return (
        <Link
            to="/home"
        >
            <img
                style={{
                    width: 200,
                    padding: 20,
                    backgroundColor: '#FB7F7F'
                }}
                alt = 'Imagen cabecera'
                className="mx-auto py-3 animate__animated animate__jackInTheBox"
                src={Logo}
            />
        </Link>
    )
}
