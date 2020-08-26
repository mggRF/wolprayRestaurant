'use strict';

const jwt = require('jsonwebtoken');
const moment = require('moment');
const { TOKEN_SECRET } = require('../Constantes/ConstantesSeguridad');

function createToken(user) {
    const payload = {
        sub: user.userid,
        iat: moment().unix(),//da la fecha en milisegundos
        exp: moment().add(30, 'minutes').unix(),//Expira en 30 minutos
    }

    return jwt.sign(payload, TOKEN_SECRET);
}


module.exports = createToken