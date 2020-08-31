import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ControllerMusic from '../Controladores/music/ControllerMusic';
import ControllerClub from '../Controladores/clubs/ControllerClub';
import Home from '../Paginas/Home';
import '../../styles.css'
import ControllerCompanies from '../Controladores/companies/ControllerCompanies';
import ControllerDresscode from '../Controladores/dresscode/ControllerDresscode';
import ControllerRole from '../Controladores/roles/ControllerRole';

const HOME = "/";
const MUSICA = "/music";
const CLUBS = "/clubs";
const COMPANIES = "/companies";
const DRESSCODE = "/dresscode";
const ROLES = "/role";


export default class Rutas extends Component {


    render() {

        return (
            <div>
            <Router >
            <nav className=" navbar-expand-lg navbar-light bg-light header2 sticky-top">
            
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <div className ="mr-auto"></div>
              <ul className="navbar-nav">
                <div className="nav-item">
                <Link to={HOME} className="nav-link rutas" >Home</Link>
                </div>
                <div className="nav-item">
                <Link to={MUSICA} className="nav-link rutas">Música</Link>
                </div>
                <div className="nav-item">
                <Link to={CLUBS} className="nav-link rutas">Clubs</Link>
                </div>
                <div className="nav-item">
                <Link to={DRESSCODE} className="nav-link rutas">Dresscode</Link>
                </div>
                <div className="nav-item">
                <Link to={COMPANIES} className="nav-link rutas">Empresas</Link>
                </div>
                <div className="nav-item">
                <Link to={ROLES} className="nav-link rutas">Roles</Link>
                </div>
                <div className="nav-item">
                <Link to={CLUBS} className="nav-link rutas">Usuarios</Link>
                </div>
                
              </ul>
            </div>
          </nav>
                    <Switch>
                        <Route exact path={HOME} component={Home} />
                        <Route path={MUSICA} component={ControllerMusic} />
                        <Route path={CLUBS} component={ControllerClub} />
                        <Route path={COMPANIES} component={ControllerCompanies} />
                        <Route path={DRESSCODE} component={ControllerDresscode} />
                        <Route path={ROLES} component={ControllerRole} />
                    </Switch>
                </Router>

            </div>
        )
    }
}