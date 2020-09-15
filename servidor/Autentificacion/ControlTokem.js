var ControladorUsers = require('../controladores/ControladorUsers');
const createToken = require('./service');
let usersController = new ControladorUsers();

class ControlTokem {

    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        if (email && password) {
            usersController.userByEmail(email)
                .then(dat => {
                    if (dat.length > 0) {
                        let user = dat[0];
                        if (user != null) {
                            if (password === user.password) {

                                const token = createToken(user);
                                req.session.userid = user.userid;
                                req.session.role = user.roleid;
                                usersController.enviaDatos(res,{
                                    mensaje: 'Autenticación correcta',
                                    token: token,
                                    role:user.roleid,
                                    id: user.userid
                                })
                            } else {
                                usersController.enviaDatos(res, "Credenciales incorrectas",403);
                            }

                        } else {
                            usersController.enviaDatos(res, "Credenciales incorrectas", 403);
                        }
                    }else{
                        usersController.enviaDatos(res, "Credenciales incorrectas" , 403);
                    }

                })
                .catch(err => {
                    console.log('Ha ocurrido un error')
                    console.log(err)
                    usersController.enviaDatos(res, err , 403);
                });
        } else {
            usersController.enviaDatos(res,"Error en los parámetros ingresados", 500);
        }
    }


    logout(req, res) {
        req.session.destroy();
        usersController.enviaDatos(res,"Se ha cerrado la sesión");
    }
}

module.exports = ControlTokem