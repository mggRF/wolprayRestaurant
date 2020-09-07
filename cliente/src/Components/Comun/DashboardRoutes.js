import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import ControllerMusic from '../Controladores/music/ControllerMusic';
import ControllerClub from '../Controladores/clubs/ControllerClub';
import Home from '../Paginas/Home';
import ControllerCompanies from '../Controladores/companies/ControllerCompanies';
import ControllerDresscode from '../Controladores/dresscode/ControllerDresscode';
import ControllerRole from '../Controladores/roles/ControllerRole';
import ControllerUsers from '../Controladores/users/ControllerUsers';
import ControllerCCAA from '../Controladores/ccaa/ControllerCCAA';
import ControllerProvince from '../Controladores/province/ControllerProvince';


import paths from './Paths';

export const DashboardRoutes = () => {


    const { MUSICA, HOME, CCAA, CLUBS, COMPANIES, DRESSCODE, ROLES, USERS , PROVINCE} = paths;

    return (
        <>
            <Switch>
                <Route exact path={HOME.path} component={Home} />
                <Route exact path={MUSICA.path} component={ControllerMusic} />
                <Route exact path={CLUBS.path} component={ControllerClub} />
                <Route exact path={COMPANIES.path} component={ControllerCompanies} />
                <Route exact path={DRESSCODE.path} component={ControllerDresscode} />
                <Route exact path={ROLES.path} component={ControllerRole} />
                <Route exact path={USERS.path} component={ControllerUsers} />
                <Route exact path={CCAA.path} component={ControllerCCAA} />
                <Route exact path={PROVINCE.path} component={ControllerProvince} />

                <Redirect to={HOME.path} />
            </Switch>
        </>
    )
}
