const Presenta = require("./Presenta");

class MontaLimites {
    //Procesos especiales que se deban hacer con datos, antes de enviar
    //establecer situaciones limite y modificar contenido
    static procesaDatos(dat) {
        //super.procesaDatos(res, datos, status);
        let datos = dat[0];
        let limit_porInt = 0;
        let limit_porExt = 0;
        let limit_mess = "";
        console.error('0');
        console.error(datos.state_limitClubs_porInt,
            datos.state_limitClubs_porExt,
            datos.state_limitClubs_porInt + datos.city_limitClubs_porExt)
        if (datos.club_limit_porInt && 
            datos.club_limit_porExt &&
            (datos.club_limit_porInt+datos.club_limit_porExt) > 0) {
            console.error('a');
            limit_porInt = datos.club_limit_porInt;
            limit_porExt = datos.club_limit_porExt;
            limit_mess = datos.club_limit_mess;
        } else if (datos.city_limitClubs_porInt &&
            datos.city_limitClubs_porExt &&
            (datos.city_limitClubs_porInt + datos.city_limitClubs_porExt) != 0) {
            console.error('b');
            limit_porInt = datos.city_limitClubs_porInt;
            limit_porExt = datos.city_limitClubs_porExt;
            limit_mess = datos.city_limitClubs_mess;          
        } else if (datos.province_limitClubs_porInt &&
            datos.province_limitClubs_porExt &&
            (datos.province_limitClubs_porInt + datos.province_limitClubs_porExt) != 0) {
            console.error('c');
            limit_porInt = datos.province_limitClubs_porInt;
            limit_porExt = datos.province_limitClubs_porExt;
            limit_mess = datos.province_limitClubs_mess;  
        } else if (datos.state_limitClubs_porInt &&
            datos.state_limitClubs_porExt &&
            (datos.state_limitClubs_porInt + datos.city_limitClubs_porExt) != 0) {
            console.error('d');
            limit_porInt = datos.state_limitClubs_porInt;
            limit_porExt = datos.state_limitClubs_porExt;
            limit_mess = datos.state_limitClubs_mess;  
        } else if (datos.country_limitClubs_porInt &&
            datos.country_limitClubs_porExt &&
            (datos.country_limitClubs_porInt + datos.country_limitClubs_porExt) != 0) {
            console.error('b');
            limit_porInt = datos.country_limitClubs_porInt;
            limit_porExt = datos.country_limitClubs_porExt;
            limit_mess = datos.country_limitClubs_mess;  
        }
        if ((datos.maxPeopleInt == null) || isNaN(datos.maxPeopleInt)) datos.maxPeopleInt = 0;
        dat[0].limit_porInt = limit_porInt;
        dat[0].limit_porExt = limit_porExt;
        dat[0].limit_mess = limit_mess;
        dat[0].limit_valInt = datos.maxPeopleInt - (datos.maxPeopleInt * limit_porInt / 100);
        dat[0].limit_valExt = datos.maxPeopleExt - (datos.maxPeopleExt * limit_porExt / 100);

        Presenta.log(dat);
        return dat;
    }
}
module.exports = MontaLimites