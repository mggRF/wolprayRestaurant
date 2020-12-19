import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Estilo from '../headerstyle.module.css';

export const NavbarNav = ({ title = '', icon = 'fa-home', path}) => {

    
    
    let className = `${icon} text-light fa-lg mr-3`;
    return (


        <li  className={Estilo.navbar}>
            <NavLink to={path} style = {{cursor: 'pointer'}} activeClassName={Estilo.active} className={Estilo.navbar}>
                <i className={className} ></i>
                {title}
            </NavLink>
        </li>

    )
}

NavbarNav.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.elementType.isRequired,
}
