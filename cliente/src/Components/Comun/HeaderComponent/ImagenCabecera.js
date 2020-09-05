import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logowolpray.png';

export const ImagenCabecera = () => {

    return (
        <Link
            to="/home"
        >
            <img
                style={{
                    width: 200,
                    padding: 20,
                }}
                className="mx-auto py-3 animate__animated animate__fadeInLeft"
                src={Logo}
            />
        </Link>
    )
}
