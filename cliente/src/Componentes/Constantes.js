/* eslint-disable no-console */
//******* Area de control *******************
const API_BASE_DEVELOPPER = 'http://localhost:3900/' //direccion base
const API_BASE_PRODUCTION = 'https://api.gastronomundo.com/' //direccion base
const VERSION_API = 'api_v00'

const variable_url = () => {
  if (version_OS() === 'Linux OS') {
    console.log('Arranca produccion->' + window.location.hostname)
    return API_BASE_PRODUCTION
  } else {
    console.log('Arranca developper->' + window.location.hostname)
    return API_BASE_DEVELOPPER
  }
}

const version_OS = () => {
  let Name = 'Not known'
  if (navigator.appVersion.indexOf('Win') !== -1) Name = 'Windows OS'
  if (navigator.appVersion.indexOf('Mac') !== -1) Name = 'MacOS'
  if (navigator.appVersion.indexOf('X11') !== -1) Name = 'UNIX OS'
  if (navigator.appVersion.indexOf('Linux') !== -1) Name = 'Linux OS'
  return Name
}
module.exports = {
  AUTORIZAR: true,
  API_URL: variable_url() + VERSION_API + '/',
  LOCALS: 'locals',
  MENU: 'menu',
  MENU_PLATOS: 'menu_platos',
  STATES: 'states',
  PROVINCES: 'provinces',
  GRUPOS: 'grupos',
  COMPANIES: 'companies',
  ZONAS: 'localcity',
  ROLE: 'roles',
  USERS: 'users',
  CITYS: 'citys',
  COUNTRIES: 'countrys',
  PRODUCTS: 'products',
  LPPAGINA: '20', //lineas por pagina

  INS: 'fas fa-plus',
  MOD: 'fas fa-edit',
  DEL: 'fas fa-trash-alt',
  VIE: 'fas fa-eye',

  CONVERSOR: {
    c_state: 'states',
    c_city: 'citys',
    c_country: 'countrys',
    c_provinces: 'provinces',
    n_grupos: 'grupos',
    n_localcity: 'localcity',
    LOGIN: 'login',
    LOGOUT:'logout',
  },
  METODO: {
    I: 'POST',
    E: 'PUT',
    D: 'DELETE',
  },
  LETRERO_BOTON: {
    I: 'Insertar',
    E: 'Modificar',
    D: 'Borrar',
    V: 'Cerrar',
  },
  COLORES: {
    //indicar clase
    BTN_VER: 'btn-info',
    BTN_EDIT: 'btn-success',
    BTN_DEL: 'btn-danger',
    BTN_INSERT: 'btn-success',
  },
}
