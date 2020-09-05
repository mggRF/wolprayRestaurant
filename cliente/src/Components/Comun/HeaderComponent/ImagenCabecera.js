import React from 'react';
import Logo from '../images/logowolpray.png';

export const ImagenCabecera = () => {
    return (
        <a
            href="#"
        >
            <img
                style={{
                    width: 200,
                    padding: 20,
                }}
                className="mx-auto py-3"
                src={Logo}
            />
        </a>
    )
}
