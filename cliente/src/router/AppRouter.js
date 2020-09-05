import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Rutas from '../Components/Comun/Rutas'
import LoginScreen  from '../Components/LoginComponent/LoginScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path ='/login' component ={LoginScreen}/>
                <Route path ='/' component ={Rutas}/>
            </Switch>
            </div>
        </Router>
    )
}
