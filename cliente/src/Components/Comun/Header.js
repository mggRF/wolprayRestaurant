import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import '../../styles.css'




export default class  Header extends Component {
  
    render(){
        return (
            <div>
                    <nav className="navbar navbar-expand-lg fixed-top header">
                    <div className="container">
                        <h6 className="navbar-brand" >{/*<img src="images/logowolpray.png/" class="logo-brand" alt="Wolpray"></img>*/} WOLPRAY </h6>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                            <h6 className="nav-link" >Usuario:</h6>
                            </li>
                            <li className="nav-item">
                            <h8 className="nav-link" >nombreusuario</h8>
                            </li>
                            <li className="nav-item ">
                            <h6 className="nav-link" >Rol:</h6>
                            </li>
                            <li className="nav-item ">
                            <h8 className="nav-link" >Admin</h8>
                            </li>
                            <div className="container">
                                <button type="button" className="btn btn-primary logoutbutton">Logout</button>
                            </div>
                        </ul>
                        
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}