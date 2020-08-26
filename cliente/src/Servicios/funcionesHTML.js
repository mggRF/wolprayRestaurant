const { MOD, DEL,VIE } = require("../Components/Constantes");

export function montaBoton(funcion,id,clase,texto){
    let salida = '<button type="button" class="btn '
    salida += clase + '">' + texto + '</button>'
    return salida;
}
export function montaBotones(id){
    let salida="";
    salida +=montaBoton("V",id,"btn-info",VIE)
    salida +=montaBoton("V",id,"btn-success",MOD)
    salida +=montaBoton("V",id,"btn-danger",DEL)
    return salida;
}