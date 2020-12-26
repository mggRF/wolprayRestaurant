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
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SecurityIcon from '@material-ui/icons/Security';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

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
import ControllerProducts from './Componentes/Controladores/products/ControllerProducts';
import { CARPETA } from 'Componentes/Constantes'
import ControllerUsers from './Componentes/Controladores/users/ControllerUsers';



const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: CARPETA ,
    level: 5,
  },
  {
    path: '/grupos',
    name: 'Grupos',
    icon: GroupWorkIcon,
    component: ControllerGrupo,
    layout: CARPETA ,
    level: 5,
  },
  {
    path: '/menu',
    name: 'Menu',
    icon: MenuBookIcon,
    component: ControllerMenu,
    layout: CARPETA ,
    level: 5,
  },
  {
    path: '/menuplatos',
    name: 'Platos del menu',
    icon: MenuOpenIcon,
    component: ControllerMenuPlatos,
    layout: CARPETA ,
    level: 9,
  },
  {
    path: '/carta',
    name: 'Carta',
    icon: PlayForWorkIcon,
    component: ControllerProducts,
    layout: CARPETA ,
    level: 5,
  },
  {
    path: '/zonas',
    name: 'Zonas servicio',
    icon: LocationCityIcon,
    component: ControllerLocalCity,
    layout: CARPETA ,
    level: 5,
  },
  {
    path: '/locals',
    name: 'Locales',
    icon: LocalDiningIcon,
    component: ControllerLocal,
    layout: CARPETA ,
    level: 5,
  },
  {
    path: '/companies',
    name: 'Compañias',
    icon: HomeWorkIcon,
    component: ControllerCompanies,
    layout: CARPETA ,
    level: 5,
  },
  {
    path: '/role',
    name: 'Roles',
    icon: SecurityIcon,
    component: ControllerRole,
    layout: CARPETA ,
    level: 5,
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    icon: SupervisedUserCircleIcon,
    component: ControllerUsers,
    layout: CARPETA ,
    level:9,
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: Person,
    component: UserProfile,
    layout: CARPETA ,
    level: 99,
  },
  {
    path: '/table',
    name: 'Table List',

    icon: 'content_paste',
    component: TableList,
    layout: CARPETA ,
    level: 99,
  },
  {
    path: '/typography',
    name: 'Typography',

    icon: LibraryBooks,
    component: Typography,
    layout: CARPETA ,
    level: 99,
  },
  {
    path: '/icons',
    name: 'Icons',

    icon: BubbleChart,
    component: Icons,
    layout: CARPETA ,
    level: 99,
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: LocationOn,
    component: Maps,
    layout: CARPETA ,
    level: 99,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
    layout: CARPETA ,
    level: 99,
  },
]

export default dashboardRoutes
