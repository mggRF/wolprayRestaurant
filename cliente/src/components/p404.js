// components/NotFound.js
import React from 'react';
import { useLocation } from 'react-router-dom'

const p404 = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h3>No hemos podido encontrar la pagina</h3>
            <p>{location.pathname}</p>
        </div>
    )
}

export default p404;