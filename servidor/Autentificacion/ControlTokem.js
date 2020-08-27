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
                                res.json({
                                    mensaje: 'Autenticación correcta',
                                    token: token
                                });
                            } else {
                                res.json({ mensaje: "Usuario o contraseña incorrectos" });
                            }

                        } else {
                            res.json({ mensaje: "Usuario o contraseña incorrectos" });
                        }
                    }else{
                        res.json({ mensaje: "Usuario o contraseña incorrectos" });
                    }

                })
                .catch(err => {
                    console.log('Ha ocurrido un error')
                    console.log(err)
                    res.json({ mensaje: err });
                });
        } else {
            res.json({ mensaje: "Error en los parámetros ingresados" });
        }
    }


    logout(req, res) {
        req.session.destroy();
        res.json({ mensaje: "Se ha cerrado la sesión" });
    }
}

module.exports = ControlTokem