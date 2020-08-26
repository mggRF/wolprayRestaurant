import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ControllerMusic from '../Controladores/music/ControllerMusic';
import ControllerClub from '../Controladores/clubs/ControllerClub';
import Home from '../Paginas/Home';
import '../../styles.css'

const HOME = "/";
const MUSICA = "/music";
const CLUBS = "/clubs";


export default class Rutas extends Component {


    render() {

        return (
            <div>
            <Router >
            <nav className=" navbar-expand-lg navbar-light bg-light ">
            
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <div className ="mr-auto"></div>
              <ul className="navbar-nav">
                <div className="nav-item">
                <Link to={HOME} className="nav-link rutas" >Inicio</Link>
                </div>
                <div className="nav-item">
                <Link to={MUSICA} className="nav-link rutas">Música</Link>
                </div>
                <div className="nav-item">
                <Link to={CLUBS} className="nav-link rutas">Clubs</Link>
                </div>
                
              </ul>
            </div>
          </nav>
                    <Switch>
                        <Route exact path={HOME} component={Home} />
                        <Route path={MUSICA} component={ControllerMusic} />
                        <Route path={CLUBS} component={ControllerClub} />
                    </Switch>
                </Router>

            </div>
        )
    }
}