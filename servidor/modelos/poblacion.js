
class Poblacion {

    // id
    // cppro_id;
    //cppob_nombre;
    //cppob_ineid;
    //cppob_lat;
    //cppob_lon;

    constructor(id, cppro_id, cppob_nombre, cppob_ineid, cppob_lat, cppob_lon) {
        this.id = id;
        this.cppro_id = cppro_id;
        this.cppob_nombre = cppob_nombre;
        this.cppob_ineid = cppob_ineid;
        this.cppob_lat = cppob_lat;
        this.cppob_lon = cppob_lon;
    }
}
module.exports = Poblacion;