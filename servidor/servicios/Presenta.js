const express_logger = require('express-logger-unique-req-id');

class Presenta {

    static log(...datos) {           //negro 

        if (!Presenta.isProd()) {
            console.log(...datos);
        } else {
            let logger = express_logger.getLogger();
            logger.debug(...datos)
        }
    }
    static error(...datos) {
        if (!Presenta.isProd())
            console.error(...datos);    //rojo con icono
        else {
            let logger = express_logger.getLogger();
            logger.debug(...datos)
        }
    }
    static info(...datos) {          //azul con icono
        if (!Presenta.isProd())
            console.info(...datos);
        else {
            let logger = express_logger.getLogger();
            logger.debug(...datos)
        }
    }
    static debug(...datos) {         //negro fuerte
        if (!Presenta.isProd()) console.debug(...datos);
    }
    static warn(...datos) {
        if (!Presenta.isProd())
            console.warn(...datos); //amarillo con icono
        else {
            let logger = express_logger.getLogger();
            logger.debug(...datos)
        }
    }
    static error(...datos) {
        if (!Presenta.isProd()) {
            console.error(...datos);    //rojo con icono
        } else {
            let logger = express_logger.getLogger();
            logger.debug(...datos)
        }
    }

    static isProd() {
        //console.log ("NODE_ENV" , process.env.NODE_ENV)
        return (process.env.NODE_ENV === 'production')
    }
}
module.exports = Presenta;