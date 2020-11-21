
class Locals {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;

     constructor(idCompany  , idLocals  , locName ,locStreet,locNumber,locCPostal,idCity ,locDescription,
        locPhone,locImage,locLatitude,locLongitude,locPath,locMaxPeopleInt,locMaxPeopleExt,loc_limit_porInt,
        loc_limit_porExt,loc_limit_mess,locTokem,locCommMail,locCommSMS){
         this.idCompany = idCompany;
         this.idLocals = idLocals;
         this.locName = locName;
         this.locStreet = locStreet;
         this.locNumber = locNumber;
         this.locCPostal = locCPostal;
         this.idCity = idCity;
         this.locDescription = locDescription;
         this.locPhone = locPhone;
         this.locImage = locImage;
         this.locLatitude = locLatitude;
         this.locLongitude = locLongitude;
         this.locPath = locPath;
         this.locMaxPeopleInt = locMaxPeopleInt;
         this.locMaxPeopleExt = locMaxPeopleExt;
         this.loc_limit_porInt = loc_limit_porInt;
         this.loc_limit_porExt = loc_limit_porExt;
         this.loc_limit_mess = loc_limit_mess;
         this.locTokem = locTokem;
         this.locCommMail = locCommMail;
         this.locCommSMS = locCommSMS;
     }

}
module.exports = Locals;