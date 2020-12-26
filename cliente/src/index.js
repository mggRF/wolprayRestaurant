/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import p404 from "components/p404";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import "assets/css/cssMio.css";
import { ThemeProvider } from '@material-ui/core/styles';

import LoginScreen from './Componentes/LoginComponent/LoginScreen';
import RegisterComponent from "Componentes/RegisterComponent/RegisterComponent";
import Logout from './Componentes/LoginComponent/Logout';
import { CARPETA } from 'Componentes/Constantes';
import { Redirect } from 'react-router-dom';
import TemaConfig from './assets/TemaConfig'
const hist = createBrowserHistory();
//<Router history={hist}>
ReactDOM.render(
  <ThemeProvider theme={TemaConfig}>
    <Router history={hist}>
      <Switch>
        <Route exact path={CARPETA + '/login'} component={LoginScreen} />
        <Route exact path={CARPETA + '/logout'} component={Logout} />
        <Route exact path={CARPETA + '/register'} component={RegisterComponent} />

        <Route path={CARPETA} component={Admin} />
        <Redirect exact path="/" to={CARPETA} />
        <Route component={p404} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
