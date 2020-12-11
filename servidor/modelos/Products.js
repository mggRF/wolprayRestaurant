class Product{


    constructor(idProduct, idLocal, productName, productDescri, productPrice,
         productImage, idGrupo, status,productIva){
        this.idProduct = idProduct;
        this.idLocal = idLocal;
        this.productName = productName;
        this.productDescri = productDescri;    
        this.productPrice = productPrice;
        this.productImage = productImage;
        this.idGrupo = idGrupo;
        this.status = status;
        this.productIva = productIva
    }

}

module.exports = Product;


