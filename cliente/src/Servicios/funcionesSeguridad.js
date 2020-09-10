export function checkUsuario(role) {

    if (role >= init.role) {

        return {
            id: init.id,
            role: init.role,
            token: init.token
        };
    }else{

    }
}


function init() {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


