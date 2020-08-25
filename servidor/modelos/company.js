
class Company {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;
 
     constructor(companyid  , userid ,companyName,companyAddress,countryid ,company_CIF ){
         this.companyid = companyid;
         this.userid = userid;
         this.companyName = companyName;
         this.companyAddress = companyAddress;
         this.countryid = countryid;
         this.company_CIF = company_CIF;
     }

}
module.exports = Company;