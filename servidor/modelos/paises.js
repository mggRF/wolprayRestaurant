'use strict'
class Pais {
    //  country_id
    //  iso2;
    //  short_name;
    // spanish_name;
    //calling_code;
    // cctld;
    //iso3;
    //long_name;
    //numcode;
    //un_member

    constructor(id, iso2, short_name, spanish_name,calling_code,cctld,iso3,long_name,numcode,un_member) {
        this.country_id = id
        this.iso2=iso2;
        this.short_name=short_name;
        this.spanish_name=spanish_name;
        this.calling_code=calling_code;
        this.cctld = cctld;
        this.iso3=iso3;
        this.long_name=long_name;
        this.numcode=numcode;
        this.un_member=un_member;
    }

}
module.exports = Pais;