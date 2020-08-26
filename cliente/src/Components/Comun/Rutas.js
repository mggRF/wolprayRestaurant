import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ControllerMusic from '../Controladores/music/ControllerMusic';
import ControllerClub from '../Controladores/clubs/ControllerClub';
import Home from '../Paginas/Home';

const HOME = "/";
const MUSICA = '/music';
const CLUBS = '/clubs';


export default class Rutas extends Component {


    render() {

        return (
            <div>

                <Link to={HOME}>inicio</Link>
                <Link to={MUSICA}>musica</Link>
                <Link to={CLUBS}>clubs</Link>
                <Router >
                    <Switch>
                        <Route path={HOME} component={Home} />
                        <Route path={MUSICA} component={ControllerMusic} />
                        <Route path={CLUBS} component={ControllerClub} />
                    </Switch>
                </Router>

            </div>
        )
    }
}