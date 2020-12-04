const path = require('path');
const API_BASE_DEVELOPPER = "http://localhost:3900/";   //direccion base
const API_BASE_PRODUCTION = "http://api.gastronomundo.com/";   //direccion base
const RUTA_UPLOADS_DEVELOPPER = path.dirname(path.dirname(__dirname)) + '/uploads/';
const RUTA_UPLOADS_PRODUCTION = "/home/api/uploadsRestaurant/";

const variable_url = () => {
    if (process.env.NODE_ENV === 'production') {
        return API_BASE_PRODUCTION;
    } else {
        return API_BASE_DEVELOPPER;
    }
}
const carpeta_imagenes = () => {
    
    if (process.env.NODE_ENV.trim() === 'production') {
        return RUTA_UPLOADS_PRODUCTION;
    } else {
        return RUTA_UPLOADS_DEVELOPPER;
    }
}
const VERSION = 'api_v00/';
module.exports = {
    VERSION,
    URL:variable_url(),
    COMUNIDADES :'/' +  VERSION + 'states',
    LOCALS:'/' +  VERSION  + 'locals',
    LOCALCITY:'/' +  VERSION  + 'localcity',
    MENU: '/' + VERSION + 'menu',
    MENU_PLATOS: '/' + VERSION + 'menu_platos',
    GRUPOS: '/' + VERSION + 'grupos',
    PAISES: '/' +  VERSION  + 'countrys',
    PROVINCIAS: '/' +  VERSION  + 'provinces',
    POBLACIONES: '/' +  VERSION  + 'citys',
    PRODUCTS: '/' +  VERSION  + 'products',
    USERS: '/' +  VERSION  + 'users',
    IVA:'/' +  VERSION  + 'iva',
    ROLES: '/' +  VERSION  + 'roles',
    COMPANIES: '/' +  VERSION  + 'companies',
    PRODUCTS: '/' +  VERSION  + 'products',
  
    UPLOADS: '/' +  VERSION  + 'uploads',
    CARPETA_IMAGENES: carpeta_imagenes(),
    NOPICTURE: 'nofile.jpg'
}