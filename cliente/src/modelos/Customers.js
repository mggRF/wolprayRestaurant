
class Customers {
    

     constructor(custId ,custName,custMail,custPass ,custPhone, idCity,custValidateMail, 
        custValidatePhone, custAlta, custModifVal,custTDoc,custNDoc,custTemporal ){
         this.custId = custId;
         this.custName = custName;
         this.custMail = custMail;
         this.custPass = custPass;
         this.custPhone = custPhone;
         this.idCity = idCity;
         this.custValidateMail = custValidateMail;
         this.custValidatePhone = custValidatePhone;
         this.custAlta = custAlta;
         this.custModifVal = custModifVal;
         this.custTDoc = custTDoc;
         this.custNDoc = custNDoc;
         this.custTemporal= custTemporal
     }

}
module.exports = Customers;