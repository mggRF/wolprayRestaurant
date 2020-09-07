//******* Area de control *******************
const API_BASE_DEVELOPPER = "http://localhost:3800/";   //direccion base
const API_BASE_PRODUCTION = "http://wolpray.es:3800/";   //direccion base

const VERSION_API = "api_v00";

const variable_url = () => {
    if (process.env.NODE_ENV === 'production') {
        return API_BASE_PRODUCTION;
    } else {
        return API_BASE_DEVELOPPER;
    }
}
module.exports = {
    API_URL: variable_url()  + VERSION_API + '/',
    CLUBS: 'clubs',
    EVENTS: 'events',
    STATES: 'states',
    MUSIC: 'musics',
    COMPANIES:'companies',
    DRESSCODE: 'dresscode',
    ROLE: 'roles',
    USERS: 'users',
    STATES_SELECT: 'states/select/',

    LPPAGINA: "5",                             //lineas por pagina
    
    INS: "Añadir",
    MOD: "Modificar",
    DEL: "Delete",
    VIE: "VER",
    
    CONVERSOR: {
        c_state: 'states',
        c_city: 'citys',
        c_country: 'countrys',
        c_provinces: 'provinces',
        n_categories:'categories',
        n_dresscode:'dresscode',
        n_music:'musics'
        
    },
    METODO: {
        I:'POST',
        E:'PUT',
        D:'DELETE'
    },
    LETRERO_BOTON:{
        I:'Insertar',
        E:'Modificar',
        D:'Borrar',
        V:'Cerrar'

    },
    COLORES: {                      //indicar clase
        BTN_VER:"btn-info",
        BTN_EDIT:"btn-success",
        BTN_DEL: "btn-danger",
        BTN_INSERT: "btn-success"

    }
}