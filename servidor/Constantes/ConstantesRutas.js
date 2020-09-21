const API_BASE_DEVELOPPER = "http://localhost:3800/";   //direccion base
const API_BASE_PRODUCTION = "http://api.wolpray.es:3800/";   //direccion base


const variable_url = () => {
    if (process.env.NODE_ENV === 'production') {
        return API_BASE_PRODUCTION;
    } else {
        return API_BASE_DEVELOPPER;
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
}