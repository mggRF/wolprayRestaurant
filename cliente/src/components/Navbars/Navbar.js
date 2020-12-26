import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// core components
import AdminNavbarLinks from './AdminNavbarLinks.js'

import styles from 'assets/jss/material-dashboard-react/components/headerStyle.js'
import LoginScreen from './../../Componentes/LoginComponent/LoginScreen';

import NavbarHora from './NavbarHora';
import { checkUsuario } from './../../Servicios/funcionesSeguridad';


const useStyles = makeStyles(styles)

export default function Header(props) {
  checkUsuario(3)
  const [user, actUser] = useState()
  const classes = useStyles()
  let userA = LoginScreen.datosLogin()
 
    if (!(userA && userA.NotLogedd)) {
      if (user===undefined || user.id != userA.id) actUser(userA)
  }
  const { color } = props
  const appBarClasses = classNames({
    [' ' + classes[color]]: color,
  })

  // if (user === null || (user.NotLogged && user.NotLogged == true)) {
  //   console.log(userA)
  //   alert('finNavbar')
  //   window.location.href = CARPETA + '/login'
  //   return (<Redirect to={CARPETA + '/login'} />)
  // }
  //

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>

        {/* Here we create navbar brand, based on route name */}
        <NavbarHora user={user} classes={classes} routes={props.routes} />
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton color="inherit" aria-label="open drawer" onClick={props.handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )

}

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),

  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
}
