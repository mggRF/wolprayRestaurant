const configSec = require('./config');
const express = require('express');
const jwt = require('jsonwebtoken');

let Autorizado = express.Router(); 
Autorizado.use((req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
 
    if (token) {
      jwt.verify(token, configSec.TOKEN_SECRET, (err, decoded) => {      
        if (err) {
           res.send({ mensaje: 'Token inválida -> ' + err });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveído.' 
      });
    }
 });

 module.exports = Autorizado;
