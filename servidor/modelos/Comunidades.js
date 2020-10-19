'use strict'
class Comunidades {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;
    // state_limit_por;
    // state_limit_mess


     constructor(stateid, stateName, countryid, state_limit_por, state_limit_mess){
         this.stateid = stateid;
         this.stateName = stateName;
         this.countryid = countryid;
         this.state_limit_por=state_limit_por;
         this.state_limit_mess=state_limit_mess;
     }

}
module.exports = Comunidades;