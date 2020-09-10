export function checkUsuario(role) {
    let init = JSON.parse(localStorage.getItem('user')) || { logged: false };
    init.role=9;
    if (role >= init.role) {
        return {
            id: init.id,
            role: init.role,
            token: init.token
        };
    } else {
        //******************    window.history.back();    //solucion 1
        window.location.href = '/login/';
    }
}


function init() {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


