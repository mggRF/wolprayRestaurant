export default class Company {
  constructor(
    idCompany,
    companyName,
    companyAddress,
    idCity,
    company_CIF,
    companyTlfo,
    companyMail,
    companyContact,
    companyWeb
  ) {
    this.idCompany = idCompany
    this.companyName = companyName
    this.companyAddress = companyAddress
    this.idCity = idCity
    this.company_CIF = company_CIF
    this.companyTlfo = companyTlfo
    this.companyMail = companyMail
    this.companyContact = companyContact
    this.companyWeb = companyWeb
  }
}
