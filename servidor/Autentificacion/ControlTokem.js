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
                                console.log('El usuario se ha conectado ccorrectamente');

                                const token = createToken(user);
                                req.session.userid = user.userid;
                                req.session.role = user.roleid;
                                usersController.enviaDatos(res,{
                                    mensaje: 'Autenticación correcta',
                                    token: token
                                })
                            } else {
                                usersController.enviaDatos(res,{
                                    mensaje: "Usuario o contraseña incorrectos"
                                },403);
                            }

                        } else {
                            usersController.enviaDatos(res,{ mensaje: "Usuario o contraseña incorrectos" }, 403);
                        }
                    }else{
                        usersController.enviaDatos(res,{ mensaje: "Usuario o contraseña incorrectos" }, 403);
                    }

                })
                .catch(err => {
                    console.log('Ha ocurrido un error')
                    console.log(err)
                    usersController.enviaDatos(res,{ mensaje: err }, 403);
                });
        } else {
            usersController.enviaDatos(res,{ mensaje: "Error en los parámetros ingresados" }, 500);
        }
    }


    logout(req, res) {
        req.session.destroy();
        usersController.enviaDatos(res,{ mensaje: "Se ha cerrado la sesión" });
    }
}

module.exports = ControlTokem