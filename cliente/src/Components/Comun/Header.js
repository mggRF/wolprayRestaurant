import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import './headerstyle.css'




export default class  Header extends Component {
  
    render(){
        return (
            <div>
                    <nav className="navbar navbar-expand-lg fixed-top header">
                    <div className="container">
                        <a className="navbar-brand" href="#">{/*<img src="images/logowolpray.png/" class="logo-brand" alt="Wolpray"></img>*/} WOLPRAY </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <ion-icon name="menu-outline"></ion-icon>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                            <a className="nav-link" href="#">Musica </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Clubs</a>
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