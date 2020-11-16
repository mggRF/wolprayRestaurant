class Menu {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;

     constructor(idmenu, idLocal , menuName, menuDescription, menuPrecio, menuSeq){
         this.idmenu = idmenu;
         this.idLocal = idLocal;
         this.menuName = menuName;
         this.menuDescription = menuDescription;
         this.menuPrecio = menuPrecio;
         this.menuSeq = menuSeq;
     }

}
module.exports = Menu;