
import React from 'react';

export const BotonCabecera = (props) => {
    let nombre = props.name;
    let columna = props.col || props.name;
    console.log("viendo props:", props)
    console.log("viendo nombre: ", nombre)
    console.log("viendo columna:", columna)

    return (
        <>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button
                        className="page-link pu-2 px-3"
                        type="button"
                        onClick={() => props.gestionClas({ nombre })}
                    >
                        {columna}
                    </button>
                </li>
            </ul>
        </>
    )

}