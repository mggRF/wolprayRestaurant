const Presenta = require("../servicios/Presenta");
const path = require('path');

//const FS_CERTIFICADO_DEVELOPPER = 'D:\\Proyectos\\wolpray\\instalacionLocal\\localhost.pem';
//const FS_KEY_DEVELOPPER = 'D:\\Proyectos\\wolpray\\instalacionLocal\\localhost-key.pem';
const FS_CERTIFICADO_DEVELOPPER = path.join(__dirname, '../../../instalacionLocal/localhost.pem');
const FS_KEY_DEVELOPPER = path.join(__dirname,'../../../instalacionLocal/localhost-key.pem');
const FS_CERTIFICADO_PRODUCTION = '/etc/webmin/letsencrypt-cert.pem';
const FS_KEY_PRODUCTION = '/etc/webmin/letsencrypt-key.pem';
const IT_IS_SECURE = false;  //True si se quiere activar el protocolo https, false para http.
module.exports = {
    AUTORIZAR: true,        //false no comprueba autorizacion
    TOKEN_SECRET: process.env.TOKEN_SECRET || "elSecretoDeWolprayRestaurantEsMasMisterioso",

    FS_CERTIFICADO: Presenta.isProd() ? FS_CERTIFICADO_PRODUCTION : FS_CERTIFICADO_DEVELOPPER,
    FS_KEY: Presenta.isProd() ? FS_KEY_PRODUCTION : FS_KEY_DEVELOPPER,

}