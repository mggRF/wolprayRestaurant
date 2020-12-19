import React, { Component } from 'react';
import Header from '../Comun/HeaderComponent/Header';

import { Sidebar } from './HeaderComponent/Sidebar';
import paths from './Paths';
import { DashboardRoutes } from './DashboardRoutes';
import Estilo from './headerstyle.module.css';

export default class Rutas extends Component {




  render() {


    const user = {
      userid: 1,
      userName: "Administrador",
      mail: "migarcia@dopc.com",
      password: "1111",
      userPhone: "123456789",
      birthdate: "1990-08-18T22:00:00.000Z",
      roleid: 9,
      companyid: null
    }
    return (
      <>
        <div className="navbar navbar-expand-md navbar-light">
          <button 
            className="navbar-toggler ml-auto mb-2 bg-light"
            type="button" data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <div className="container-fluid">
              <div className="row">

                {/* Sidebar */}
                <Sidebar
                  paths={paths}
                  user={user}
                />
                {/* end of sidebar */}

                {/* end of top-nav */}
                <Header />

              </div>
            </div>
          </div>
        </div>
        <div className="section-container s">
          <DashboardRoutes />
          
        </div>
      </>
    )
  }
}