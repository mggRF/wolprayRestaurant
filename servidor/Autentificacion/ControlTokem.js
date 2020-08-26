const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../Constantes/ConstantesSeguridad');
const moment = require('moment');
var ControladorUsers = require('../controladores/ControladorUsers');
let users = new ControladorUsers();

class ControlTokem {



    login(req, res) {
        if (!req.headers.authorization) {
            return res.status(403).send({ message: 'No tienes autorización' });
        }

        const email = req.body.email;
        const password = req.body.password;

        if (ControlTokem.compruebaUsuario(email, password)) {
            const payload = {
                id: '',
                role: '',
                name: '',
            };
            const token = jwt.sign(payload, TOKEN_SECRET, {
                expiresIn: 1440
            });
            res.json({
                mensaje: 'Autenticación correcta',
                token: token
            });
        } else {
            res.json({ mensaje: "Usuario o contraseña incorrectos" })
        }
    }
    logout(req, res) {

    }



    static compruebaUsuario(email, pass) {
        //comprueba si usuario y contraseña son validos en la base de datos y devuelve true
        
        users.userByEmail(email)
            .then(dat => {
                console.log(dat);
                return true;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }
}

module.exports = ControlTokem