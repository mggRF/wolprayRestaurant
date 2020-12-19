export default class Menu {
  //  coa_id;cp
  //  cpcoa_nombre;
  //  cpcoa_pais;

  constructor(idmenu, idLocal, menuName, menuDescription, menuPrecio, menuSeq, menu_iva, menuDetalles) {
    this.idmenu = idmenu
    this.idLocal = idLocal
    this.menuName = menuName
    this.menuDescription = menuDescription
    this.menuPrecio = menuPrecio
    this.menuSeq = menuSeq
    this.menu_iva = menu_iva
    this.menuDetalles = menuDetalles
  }
}

