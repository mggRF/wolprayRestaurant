api wolpray


Sistema de identificación****************************
/Login              Identifica al usuario y devuelve tokem
/Logout             Cierra la sesión de usuario

Área de mantenimiento----- IDENTIFICADO **********************

Países--------------------------------------------------------

/api_v00/countrys/          listado de todos los países
/api_v00/countrys/:id       listado del país indicado por id
/api_v00/countrys/select/   listado de todos los países con id y opción  ///No implementado

Comunidades Autónomas/estados----------------------------------
/api_v00/states/          listado de todos los estados/comunidades autónomas
/api_v00/states/:id       listado del estado indicado por id
/api_v00/states/select/   listado de todos los estados con id y opción del país indicado por id

Provincias-----------------------------------------------------
/api_v00/provinces/          listado de todas las provincias
/api_v00/provinces/:id       listado dela provincia indicado por id
/api_v00/provinces/select/   listado de todas las provincias con id y opción de la CCAA indicado por id

Poblaciones----------------------------------------------------
/api_v00/citys/          listado de todas las poblaciones
/api_v00/citys/:id       listado de la población indicado por id
/api_v00/citys/select/   listado de todas las poblaciones con id y opción de la provincia indicado por id