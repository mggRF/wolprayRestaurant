'use strict'

class DatosCliente {
    // id_cliente int(11) UN AI PK 
    // dc_nombre varchar(50) 
    // dc_direccion varchar(200) 
    // dc_cpostal char(5) 
    // dc_poblacion int(11) 
    // dc_tipoCliente int(10) UN 
    // dc_correoElectronico varchar(100) 
    // dc_idfiscal

     constructor(id_cliente,dc_nombre,dc_direccion,dc_postal,dc_poblacion,dc_tipoCliente,
                    dc_correoElectronico,dc_idfiscal){
         this.id_cliente = id_cliente;
         this.dc_nombre = dc_nombre;
         this.dc_direccion = dc_direccion;
         this.dc_postal = dc_postal;
         this.dc_poblacion = dc_poblacion;
         this.dc_tipoCliente = dc_tipoCliente;
         this.dc_correoElectronico = dc_correoElectronico;
         this.dc_idfiscal = dc_idfiscal;
     }

}
module.exports = DatosCliente;