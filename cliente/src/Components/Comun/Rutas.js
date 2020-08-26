import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ControllerMusic from '../Controladores/music/ControllerMusic';
import ControllerClub from '../Controladores/clubs/ControllerClub';
import Home from '../Paginas/Home';




export default class Rutas extends Component {
    render() {
        return (
            <>
            <h3>enlace1</h3>
            <h3>enlace2</h3>
            <Link to={`${process.env.REACT_APP_PUBLIC_URL}/`}>inicio</Link>
            <Link to={`${process.env.REACT_APP_PUBLIC_URL}/music`}>musica</Link>
            <Link to={`${process.env.REACT_APP_PUBLIC_URL}/clubs`}>clubs</Link>
            <Router basename={'/interno'}>
                <Route path={`${process.env.REACT_APP_PUBLIC_URL}/`} component={Home} />
                <Route path={`${process.env.REACT_APP_PUBLIC_URL}/music`} component={ControllerMusic} />
                <Route path={`${process.env.REACT_APP_PUBLIC_URL}/clubs`} component={ControllerClub} />
            </Router>

           </>
        )
    }
}