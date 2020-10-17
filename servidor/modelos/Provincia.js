
class Provincia {

    // provinceid;
    //provinceName;
    //stateid;
    //provinceCapital;

    constructor(provinceid, provinceName,  stateid, provinceCapital,
        province_limit_por,province_limit_mess
        ) {
        this.provinceid = provinceid;
        this.provinceName = provinceName;
        this.stateid = stateid;
        this.provinceCapital = provinceCapital;
        this.province_limit_por = province_limit_por;
        this.province_limit_mess=province_limit_mess;
    }
}
module.exports = Provincia;