class NIva {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;

     constructor(idIva, ivaDescr = '' , ivaPor=0, ivaIncluido=0){
         this.idIva = idIva;
         this.ivaDescr = ivaDescr;
         this.ivaPor = ivaPor;
         this.ivaIncluido = ivaIncluido;
         
     }

}
module.exports = NIva;