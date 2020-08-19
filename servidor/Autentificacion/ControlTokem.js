const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../Constantes/ConstantesSeguridad');

class ControlTokem {


    login(req, res) {
        if (true) {
            const payload = {
                check: true
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



    compruebaUsuario(usuario,pass) {
        //comprueba si usuario y contraseña son validos en la base de datos y devuelve true
        return true;
    }
}

module.exports = ControlTokem