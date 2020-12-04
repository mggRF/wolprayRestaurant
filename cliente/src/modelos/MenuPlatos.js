class MenuPlatos {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;

     constructor(idmenu_platos=0, idMenu=0 , mpGrupo=0, mpPlato=0,
         mpPlatoName="", mpPlatoDescri=""){
         this.idmenu_platos = idmenu_platos;
         this.idMenu = idMenu;
         this.mpGrupo = mpGrupo;
         this.mpPlato = mpPlato;
         this.mpPlatoName = mpPlatoName;
         this.mpPlatoDescri = mpPlatoDescri;
     }

}
module.exports = MenuPlatos;