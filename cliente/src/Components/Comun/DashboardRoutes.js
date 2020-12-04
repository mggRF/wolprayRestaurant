import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import ControllerMenu from '../Controladores/menu/ControllerMenu';
import ControllerMenuPlatos from '../Controladores/menuPlatos/ControllerMenuPlatos';
import ControllerLocal from '../Controladores/local/ControllerLocal';
import Home from '../Paginas/Home';
import ControllerCompanies from '../Controladores/companies/ControllerCompanies';
import ControllerGroup from '../Controladores/group/ControllerGroup';
import ControllerRole from '../Controladores/roles/ControllerRole';
import ControllerUsers from '../Controladores/users/ControllerUsers';
import ControllerLocalCity from '../Controladores/localcity/ControllerLocalCity';
import ControllerProducts from '../Controladores/products/ControllerProducts';


import { GRUPOS, MENU, PRODUCTS,HOME, COMPANIES, ROLES, USERS, LOCALS,ZONAS, MENU_PLATOS } from './Paths';



export const DashboardRoutes = () => {

    return (
        <>
            <Switch>
                <Route exact path={HOME.path} component={Home} />
                <Route exact path={COMPANIES.path} component={ControllerCompanies} />
                <Route exact path={GRUPOS.path} component={ControllerGroup} />
                <Route exact path={LOCALS.path} component={ControllerLocal} />
                <Route exact path={MENU.path} component={ControllerMenu} />
                <Route exact path={MENU_PLATOS.path} component={ControllerMenuPlatos} /> 
                <Route exact path={ZONAS.path} component={ControllerLocalCity} />
                <Route exact path={PRODUCTS.path} component={ControllerProducts} />
                <Route exact path={ROLES.path} component={ControllerRole} />
                <Route exact path={USERS.path} component={ControllerUsers} />
               
                
                <Redirect to={HOME.path} />
            </Switch>
        </>
    )
}
