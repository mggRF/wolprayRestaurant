

class Presenta {

    static log(...datos){           //negro 
        if (!isProd()) console.log(...datos);
    }
    static error(...datos){
        if (!isProd()) console.error(...datos);    //rojo con icono
    }
    static info(...datos){          //azul con icono
        if (!isProd()) console.info(...datos);
    }
    static debug(...datos){         //negro fuerte
        if (!isProd()) console.debug(...datos);
    }
    static warn(...datos){
        if (!isProd()) console.warn(...datos); //amarillo con icono
    }
    static error(...datos){
        console.error(...datos);    //rojo con icono
    }

    static isProd(){
        return  process.env.NODE_ENV = 'production'
    }
}
module.exports = Presenta;