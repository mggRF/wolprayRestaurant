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
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";


import "assets/css/material-dashboard-react.css?v=1.9.0";
import LoginScreen from './Componentes/LoginComponent/LoginScreen';
import RegisterComponent from "Componentes/RegisterComponent/RegisterComponent";
import Logout from './Componentes/LoginComponent/Logout';

const hist = createBrowserHistory();
//<Router history={hist}>
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path='/login' component={LoginScreen} />
      <Route exact path='/logout' component={Logout} />
      <Route exact path='/register' component={RegisterComponent} />
      <Route path="/" component={Admin} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
