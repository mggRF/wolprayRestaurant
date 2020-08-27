
const express = require('express');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { AUTORIZAR, TOKEN_SECRET } = require('../Constantes/ConstantesSeguridad');

let Autorizado = express.Router();
Autorizado.use((req, res, next) => {
  
  if (!AUTORIZAR) {
    next();
  } else {

    if(!req.headers.authorization){
      return res.status(403).send({Message: 'No tienes autorización'});
    }
    const token = req.headers.authorization.split(' ')[1];

    if (token) {
      jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) {
          res.send({ Message: 'Token inválida -> ' + err });
        } else {
          const payload = decoded;
          
          if(payload.exp <= moment.unix()){
            return res.status(401).send({Message: 'El token ha expirado'});
          }
          if(req.session.userid !== payload.sub){
            return res.status(401).send({Message: 'Tiene que iniciar sesión para realizar esta petición'});
          }

          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.send({
        Message: 'Token no proveído.'
      });
    }
  }
});

module.exports = Autorizado;
