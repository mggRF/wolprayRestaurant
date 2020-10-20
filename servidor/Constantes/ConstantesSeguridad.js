const Presenta = require("../servicios/Presenta");

const FS_CERTIFICADO_DEVELOPPER = 'D:\\Proyectos\\wolpray\\instalacionLocal\\localhost.pem';
const FS_KEY_DEVELOPPER = 'D:\\Proyectos\\wolpray\\instalacionLocal\\localhost-key.pem';
const FS_CERTIFICADO_PRODUCTION = '/etc/webmin/letsencrypt-cert.pem';
const FS_KEY_PRODUCTION = '/etc/webmin/letsencrypt-key.pem';

module.exports = {
    AUTORIZAR: false,        //false no comprueba autorizacion
    TOKEN_SECRET: process.env.TOKEN_SECRET || "elSecretoDeWolprayEsMisterioso",

    FS_CERTIFICADO: Presenta.isProd() ? FS_CERTIFICADO_PRODUCTION : FS_CERTIFICADO_DEVELOPPER,
    FS_KEY: Presenta.isProd() ? FS_KEY_PRODUCTION : FS_KEY_DEVELOPPER,

}