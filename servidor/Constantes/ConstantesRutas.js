const path = require('path');
const API_BASE_DEVELOPPER = "http://localhost:3800/";   //direccion base
const API_BASE_PRODUCTION = "http://api.wolpray.es:3800/";   //direccion base
const RUTA_UPLOADS_DEVELOPPER = path.dirname(path.dirname(__dirname)) + '/uploads/';
const RUTA_UPLOADS_PRODUCTION = "/home/wolpraynode/uploads/";

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
    PAISES: '/' +  VERSION  + 'countrys',
    PROVINCIAS: '/' +  VERSION  + 'provinces',
    POBLACIONES: '/' +  VERSION  + 'citys',
    MUSICA: '/' +  VERSION  + 'musics',
    CLUBS: '/' +  VERSION  + 'clubs',
    DRESSCODE: '/' +  VERSION  + 'dresscode',
    USERS: '/' +  VERSION  + 'users',
    EVENTS: '/' +  VERSION  + 'events',
    SLOTS: '/' +  VERSION  + 'slots',
    ROLES: '/' +  VERSION  + 'roles',
    COMPANIES: '/' +  VERSION  + 'companies',
    PRODUCTS: '/' +  VERSION  + 'products',
    IMAGES: '/' +  VERSION  + 'images',
    UPLOADS: '/' +  VERSION  + 'uploads',
    CARPETA_IMAGENES: carpeta_imagenes(),
    NOPICTURE: 'nofile.jpg'
}