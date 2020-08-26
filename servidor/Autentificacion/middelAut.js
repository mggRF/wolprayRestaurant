
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
      return res.status(403).send({message: 'No tienes autorización'});
    }
    const token = req.headers.authorization.split(' ')[1];

    if (token) {
      jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) {
          res.send({ mensaje: 'Token inválida -> ' + err });
        } else {
          const payload = decoded;
          
          if(payload.exp <= moment.unix()){
            return res.status(401).send({message: 'El token ha expirado'});
          }

          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.send({
        mensaje: 'Token no proveído.'
      });
    }
  }
});

module.exports = Autorizado;
