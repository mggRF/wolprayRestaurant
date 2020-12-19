const CARPETA = '/interno';
const paths = {
    HOME : {
        title: 'Inicio',
        path: CARPETA + '/home',
        icon: 'fas fa-home',
        level:0

    },
    
    GRUPOS : {
        title: 'Grupos',
        path: CARPETA + '/grupos',
        icon: 'fas fa-calendar-week',
        level:5
    },
   
    
    MENU : {
        title: 'menus',
        path: CARPETA + '/menu',
        icon: 'fas fa-drum',
        level:3
    },
    MENU_PLATOS : {
        title: 'Platos menu',
        path: CARPETA + '/menuplatos',
        icon: 'fas fa-drum',
        level:3
    },
    ZONAS: {
        title: 'Zonas servicio',
        path: CARPETA + '/zonas',
        icon: 'fas fa-calendar-week',
        level:5
    },
    LOCALS : {
        title: 'Locales',
        path: CARPETA + '/locals',
        icon: 'fas fa-compact-disc',
        level:5
    },
    COMPANIES : {
        title: 'Compañías',
        path: CARPETA + "/companies",
        icon: 'fas fa-building',
        level:9
    },
    
    
    USERS : {
        title: 'Usuarios',
        path: CARPETA + '/users',
        icon: 'fas fa-users',
        level:9
    },
    ROLES : {
        title: 'Roles',
        path: CARPETA + '/role',
        icon: 'fas fa-users-cog',
        level:9
    },
    
    PRODUCTS : {
        title: 'Productos',
        path: CARPETA + '/productes',
        icon: 'fas fa-map-marker',
        level:3
    },
   
};

module.exports = paths;