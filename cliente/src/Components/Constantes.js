//******* Area de control *******************
const API_BASE = "http://localhost:3800/";   //direccion base

const VERSION_API = "api_v00";

module.exports = {
    API_URL: API_BASE + VERSION_API + '/',
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
    TAG_PAGINACION: "paginas",                    // id en donde se hubican la paginacion
    NOMBRE_FORMULARIO: "formularioMantenimiento",  //nombre formulario de mantenimiento
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