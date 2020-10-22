class Presenta {

    static log(...datos){           //negro 
        if (!Presenta.isProd()) console.log(...datos);
    }
    static error(...datos){
        if (!Presenta.isProd()) console.error(...datos);    //rojo con icono
    }
    static info(...datos){          //azul con icono
        if (!Presenta.isProd()) console.info(...datos);
    }
    static debug(...datos){         //negro fuerte
        if (!Presenta.isProd()) console.debug(...datos);
    }
    static warn(...datos){
        if (!Presenta.isProd()) console.warn(...datos); //amarillo con icono
    }
    static error(...datos){
        console.error(...datos);    //rojo con icono
    }

    static isProd(){
        //console.log ("NODE_ENV" , process.env.NODE_ENV)
        return  (process.env.NODE_ENV === 'production')
    }
}
module.exports = Presenta;