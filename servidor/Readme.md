# API wolpray


<http://localhost:3900/api_v00/>



___
### Sistema de identificación

##### GET
- /Login                      - Identifica al usuario y devuelve tokem.
- /Logout                     - Cierra la sesión de usuario.

***IMPORTANTE: El token caduca cada 30 minutos.***

___

Cada web, dispone de otro tokem, anclado en la tabla de locals, que identifica el restaurante que esta trabajando. Cualquier peticion, se debe hacer con ese tokem, y de esta forma facilitamos informacion solo de ese restaurante-...NO TIENE QUE VER CON SEGURIDAD,,,,

## Área de mantenimiento *IDENTIFICADO*
___
### Companies

##### GET
- /api_v00/companies/            - Listado de todas las compañias.
- /api_v00/companies/:id         - Listado de compañía indicado por id.
- /api_v00/companies/select/     - Select de todos las compañías 
##### POST
- /api_v00/companies/          - Objeto JSON de compañía sin id. (El id es auto increment).
##### PUT
- /api_v00/companies/:id       - Objeto JSON de compañía indicado por id.
##### DELETE
- /api_v00/companies/:id       - Borrado del objeto.
___
### Comunidades Autónomas/estados

##### GET
- /api_v00/states/            - Listado de todos los estados/comunidades autónomas.
- /api_v00/states/:id         - Listado del estado estado/comunidad por id.
- /api_v00/states/select/:id     - Listado de todos los estados/comunidades con id y opción del país indicado por id.
___

### Países


##### GET
- /api_v00/countrys/          - Listado de todos los países.
- /api_v00/countrys/:id       - Listado del país indicado por id.
- /api_v00/countrys/select/:id   - Listado de todos los países con id y opción.  ///No implementado
___
### Comunidades Autónomas/estados

##### GET
- /api_v00/states/            - Listado de todos los estados/comunidades autónomas.
- /api_v00/states/:id         - Listado del estado estado/comunidad por id.
- /api_v00/states/select/:id     - Listado de todos los estados/comunidades con id y opción del país indicado por id.
___
### Grupos tipos de plato
##### GET
- /api_v00/grupos/            - Listado de todos los grupos.
- /api_v00/grupos/select        - select de grupo indicado /de un local.
- /api_v00/grupos/:id         - Listado de grupo indicado por id.
##### POST
- /api_v00/grupos/          - Objeto JSON de grupos con id.
##### PUT
- /api_v00/grupos/:id       - Objeto JSON de grupos indicado por id.
##### DELETE
- /api_v00/grupos/:id       - Borrado de grupos indicado por id.
___

### Grupos tipos de IVA
##### GET
- /api_v00/iva/            - Listado de todos los tipos de iva.
- /api_v00/iva/select        - select de todos los iva.
- /api_v00/iva/:id         - Listado de iva indicado por id.
##### POST
- /api_v00/iva/          - Añadir objeto.
##### PUT
- /api_v00/iva/:id       - Modificar objeto.
##### DELETE
- /api_v00/iva/:id       - Borrado de Iva indicado por id.
___

### Grupos Ubicaciones de servicio
##### GET
- /api_v00/localcity/            - Listado de todos los ubicaciones (de un local).
- /api_v00/localcity/select/        - select de todos las ubicaciones formato select.
- /api_v00/localcity/:id         - Listado de ubicacion indicado por id.
##### POST
- /api_v00/localcity/          - Añadir objeto.
##### PUT
- /api_v00/localcity/:id       - Modificar objeto.
##### DELETE
- /api_v00/localcity/:id       - Borrado de ubicacion indicado por id.
___

### Locals

##### GET
- /api_v00/locals/            - Listado de todas las locales.
- /api_v00/locals/:id         - Listado de local indicado por id.
- /api_v00/locals/select/  - Listado de todos las locales con id y opción de la ciudad
                            indicado por id.
##### POST
- /api_v00/locals/          - Objeto JSON de locals sin id. (El id es auto increment).
##### PUT
- /api_v00/locals/:id       - Objeto JSON de locals indicado por id.
#### DELETE
- /api_v00/locals/:id       - Borrado de locals indicado por id.


####menu
##### GET - tokem
- /api_v00/menu/            - Listado de todos los menus de un local
- /api_v00/menu/:id         - Listado de un menu de un local indicado por id.
- /api_v00/menu/select/:id         - Listado de un menu de un local formato select.
##### POST
- /api_v00/menu/          - Objeto JSON de menus sin id. (El id es auto increment).
                            - El codigo de local se identifica en servidor por tokem
##### PUT
- /api_v00/menu/:id       - Objeto JSON de menu (con tokem)
##### DELETE
- /api_v00/menu/:id       - Borrado de menu (con tokem)
___

####menuPlatos
##### GET - tokem
- /api_v00/menu_platos/            - Listado de todos los platos de menu de un local
- /api_v00/menu_platos/:id         - Listado de un  plato de menu de un local por id.
- /api_v00/menu_platos/select/:id    todos los platos de menu de un local formato select.
- /api_v00/menu_platos/BYMENU/:id    todos los platos de un menu de un local formato select.
##### POST
- /api_v00/menu_platos/          - Objeto JSON de Plato sin id. (El id es auto increment).
                            - El codigo de local se identifica en servidor por tokem
##### PUT
- /api_v00/menu_platos/:id       - Objeto JSON de menuPlato (con tokem)
##### DELETE
- /api_v00/menu_platos/:id       - Borrado de menuPlato (con tokem)
___
### Poblaciones

##### GET
- /api_v00/citys/             - Listado de todas las poblaciones.
- /api_v00/citys/:id          - Listado de la población indicado por id.
- /api_v00/citys/select/:id      - Listado de todas las poblaciones con id y opción de la 
                            provincia indicado por id.

### Provincias

##### GET
- /api_v00/provinces/         - Listado de todas las provincias.
- /api_v00/provinces/:id      - Listado dela provincia indicado por id.
- /api_v00/provinces/select/:id  - Listado de todas las provincias con id y opción de la CCAA 
                            indicado por id.
___


### Grupos Tokem




###Products

##### GET TOKEM
- /api_v00/products/            - Listado de todos los productos de un local
- /api_v00/products/:id         - Listado de un producto
- /api_v00/products/select/:grupo  - Listado de todos los productos de un local y un grupo determinado 
                               
##### POST
- /api_v00/products/          - Objeto JSON de productos  sin id. (El id es auto increment).

##### PUT
- /api_v00/products/:id       - Objeto JSON de productos  indicado por id.
___
### Roles

##### GET
- /api_v00/roles/             - Listado de todos los roles.
- /api_v00/roles/:id          - Listado de rol indicado por id.

##### POST
- /api_v00/roles/          - Objeto JSON de rol sin id. (El id es auto increment).

##### PUT
- /api_v00/roles/:id       - Objeto JSON de rol indicado por id.

_
### Users

##### GET
- /api_v00/users/             - listado de todos los usuarios.
- /api_v00/users/:id          - listado de usuario indicado por id.
- /api_v00/users/select/:id   - listado de todos los usuarios con id y opción del rol
                            indicado por id.
##### POST
- /api_v00/users/             - Objeto JSON de usuario sin id. (El id es auto increment).
##### PUT
- /api_v00/users/:id          - Objeto JSON de usuario indicado por id.
##### DELETE
- /api_v00/users/:id          - Orden de borrado de registro.


