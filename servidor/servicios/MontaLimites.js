const Presenta = require("./Presenta");

class MontaLimites {
    //Procesos especiales que se deban hacer con datos, antes de enviar
    //establecer situaciones limite y modificar contenido
    static procesaDatos(dat) {
        //super.procesaDatos(res, datos, status);
        let datos = dat[0];
        let limit_por = 0;
        let limit_mess = "";
        console.error('0');
        if (datos.club_limit_por && datos.club_limit_por != 0) {
            console.error('a');
            limit_por = datos.club_limit_por;
            limit_mess = datos.club_limit_mess;
        } else if (datos.city_limit_por && datos.city_limit_por != 0) {
            console.error('b');
            limit_por = datos.city_limit_por;
            limit_mess = datos.city_limit_mess;
        } else if (datos.province_limit_por && datos.province_limit_por != 0) {
            limit_por = datos.province_limit_por;
            limit_mess = datos.province_limit_mess;
        } else if (datos.state_limit_por && datos.state_limit_por != 0) {
            console.error('c');
            limit_por = datos.state_limit_por;
            limit_mess = datos.state_limit_mess;
        } else if (datos.country_limit_por && datos.country_limit_por != 0) {
            console.error('d');
            limit_por = datos.country_limit_por;
            limit_mess = datos.country_limit_mess;
        }
        Presenta.debug("limit_por:", limit_por);
        if ((datos.maxPeople == null) || isNaN(datos.maxPeople)) datos.maxPeople = 0;
        dat[0].limit_por = limit_por;
        dat[0].limit_mess = limit_mess;
        dat[0].limit_val = datos.maxPeople - (datos.maxPeople * limit_por / 100);


        Presenta.log(dat);
        return dat;
    }
}
module.exports = MontaLimites