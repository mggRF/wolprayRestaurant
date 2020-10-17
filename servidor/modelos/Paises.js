'use strict'
class Pais {
    //  countryId
    //  countryName;
    

    constructor(countryId, countryName,country_limit_por, country_limit_mess) {
        this.countryId = countryId;
        this.short_name=countryName;
        this.country_limit_por = country_limit_por;
        this.country_limit_mess = country_limit_mess;
    }

}
module.exports = Pais;