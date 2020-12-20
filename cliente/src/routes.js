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
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import BubbleChart from '@material-ui/icons/BubbleChart'
import LocationOn from '@material-ui/icons/LocationOn'
import Notifications from '@material-ui/icons/Notifications'
import Unarchive from '@material-ui/icons/Unarchive'
import Language from '@material-ui/icons/Language'
// core components/views for Admin layout
import DashboardPage from 'views/Dashboard/Dashboard.js'
import UserProfile from 'views/UserProfile/UserProfile.js'
import TableList from 'views/TableList/TableList.js'
import Typography from 'views/Typography/Typography.js'
import Icons from 'views/Icons/Icons.js'
import Maps from 'views/Maps/Maps.js'
import NotificationsPage from 'views/Notifications/Notifications.js'
import ControllerGrupo from 'Componentes/Controladores/group/ControllerGroup'
import ControllerMenu from './Componentes/Controladores/menu/ControllerMenu'
import ControllerMenuPlatos from './Componentes/Controladores/menuPlatos/ControllerMenuPlatos'
import ControllerLocalCity from './Componentes/Controladores/localcity/ControllerLocalCity'
import ControllerLocal from './Componentes/Controladores/local/ControllerLocal'
import ControllerRole from './Componentes/Controladores/roles/ControllerRole';
import ControllerCompanies from './Componentes/Controladores/companies/ControllerCompanies';

const CARPETA = ''

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
    level: 5,
  },
  {
    path: CARPETA + '/grupos',
    name: 'Grupos',
    icon: 'LibraryBooks',
    component: ControllerGrupo,
    layout: '/admin',
    level: 5,
  },
  {
    path: CARPETA + '/menu',
    name: 'Menu',
    icon: 'content_paste',
    component: ControllerMenu,
    layout: '/admin',
    level: 5,
  },
  {
    path: CARPETA + '/menuplatos',
    name: 'Platos del menu',
    icon: 'content_paste',
    component: ControllerMenuPlatos,
    layout: '/admin',
    level: 9,
  },
  {
    path: CARPETA + '/zonas',
    name: 'Zonas servicio',
    icon: 'content_paste',
    component: ControllerLocalCity,
    layout: '/admin',
    level: 5,
  },
  {
    path: CARPETA + '/locals',
    name: 'Locales',
    icon: 'content_paste',
    component: ControllerLocal,
    layout: '/admin',
    level: 5,
  },
  {
    path: CARPETA + '/companies',
    name: 'Compañias',
    icon: 'content_paste',
    component: ControllerCompanies,
    layout: '/admin',
    level: 5,
  },
  {
    path: CARPETA + '/role',
    name: 'Roles',
    icon: 'content_paste',
    component: ControllerRole,
    layout: '/admin',
    level: 5,
  },
  
  {
    path: '/user',
    name: 'User Profile',
    icon: Person,
    component: UserProfile,
    layout: '/admin',
    level: 99,
  },
  {
    path: '/table',
    name: 'Table List',

    icon: 'content_paste',
    component: TableList,
    layout: '/admin',
    level: 99,
  },
  {
    path: '/typography',
    name: 'Typography',

    icon: LibraryBooks,
    component: Typography,
    layout: '/admin',
    level: 99,
  },
  {
    path: '/icons',
    name: 'Icons',

    icon: BubbleChart,
    component: Icons,
    layout: '/admin',
    level: 99,
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: LocationOn,
    component: Maps,
    layout: '/admin',
    level: 99,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin',
    level: 99,
  },
]

export default dashboardRoutes
