
class Poblacion {

    // cityid
    // provinceid;
    //cityName;

    //latitude;
    //longitude;

    constructor(cityid, provinceid, cityName,  latitude, longitude, city_limit_por, city_limit_mess) {
        this.cityid = cityid;
        this.provinceid = provinceid;
        this.cityName = cityName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.city_limit_por=city_limit_por;
        this.city_limit_mess=city_limit_mess;
    }
}
module.exports = Poblacion;