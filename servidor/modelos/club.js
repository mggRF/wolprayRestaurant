

class Club {
   
     constructor(clubid, clubName,streetName,streetNumber,postal_code,cityid,description, clubPhone,dressCodeid,coverUrl,latitude,longitude,howToGetThere,entryCost,openSeason1,closingSeason1,openSeason2,closingSeason2,openSeason3,closingSeason3,accessAge,DiasAnticipacion,companyid,maxPeople){
         this.clubid = clubid;
         this.clubName = clubName;
         this.streetName = streetName;
         this.streetNumber = streetNumber;
         this.postal_code = postal_code;
         this.cityid = cityid;
         this.description = description;
         this.clubPhone = clubPhone;
         this.dressCodeid = dressCodeid;
         this.coverUrl = coverUrl;
         this.latitude = latitude;
         this.longitude = longitude;
         this.howToGetThere = howToGetThere;
         this.entryCost = entryCost;
         this.openSeason1 = openSeason1;
         this.closingSeason1 = closingSeason1;
         this.openSeason2 = openSeason2;
         this.closingSeason2 = closingSeason2;
         this.openSeason3 = openSeason3;
         this.closingSeason3 = closingSeason3;
         this.accessAge = accessAge;
         this.DiasAnticipacion = DiasAnticipacion;
         this.companyid = companyid;
         this.maxPeople = maxPeople;
     }

}

module.exports = Club;