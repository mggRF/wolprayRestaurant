import React, { Component } from 'react'
//import PropTypes from 'prop-types'




export default class Footer extends Component {
  render() {
    return (
      <div className="container fixed-bottom">
        <footer className="page-footer font-small cyan darken-3 ">
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="www.wolpray.es">Wolpray.com</a>
          </div>
        </footer>


      </div>
    )
  }
}