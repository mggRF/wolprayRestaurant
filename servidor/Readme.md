# API wolpray




### Sistema de identificación

##### GET
- /Login                      - Identifica al usuario y devuelve tokem.
- /Logout                     - Cierra la sesión de usuario.

###### IMPORTANTE: El token caduca cada 30 minutos.

## Área de mantenimiento----- IDENTIFICADO **********************

### Países--------------------------------------------------------

##### GET
- /api_v00/countrys/          - Listado de todos los países.
- /api_v00/countrys/:id       - Listado del país indicado por id.
- /api_v00/countrys/select/:id   - Listado de todos los países con id y opción.  ///No implementado

##### POST
- /api_v00/countrys/          - Objeto JSON de country sin id. (El id es auto increment).

##### PUT
- /api_v00/countrys/:id       - Objeto JSON de country indicado por id.


### Comunidades Autónomas/estados----------------------------------

##### GET
- /api_v00/states/            - Listado de todos los estados/comunidades autónomas.
- /api_v00/states/:id         - Listado del estado estado/comunidad por id.
- /api_v00/states/select/:id     - Listado de todos los estados/comunidades con id y opción del país indicado por id.

##### POST
- /api_v00/states/          - Objeto JSON de estado/comunidad sin id. (El id es auto increment).

##### PUT
- /api_v00/states/:id       - Objeto JSON de estado/comunidad indicado por id.


### Provincias-----------------------------------------------------

##### GET
- /api_v00/provinces/         - Listado de todas las provincias.
- /api_v00/provinces/:id      - Listado dela provincia indicado por id.
- /api_v00/provinces/select/:id  - Listado de todas las provincias con id y opción de la CCAA 
                            indicado por id.

##### POST
- /api_v00/provinces/          - Objeto JSON de provincia sin id. (El id es auto increment).


##### PUT
- /api_v00/provinces/:id       - Objeto JSON de provincia indicado por id.


### Poblaciones----------------------------------------------------

##### GET
- /api_v00/citys/             - Listado de todas las poblaciones.
- /api_v00/citys/:id          - Listado de la población indicado por id.
- /api_v00/citys/select/:id      - Listado de todas las poblaciones con id y opción de la 
                            provincia indicado por id.

##### POST
- /api_v00/citys/          - Objeto JSON de población sin id. (El id es auto increment).


##### PUT
- /api_v00/citys/:id       - Objeto JSON de población indicado por id. 

### Clubs----------------------------------------------------

##### GET
- /api_v00/clubs/             - Listado de todos los clubs.
- /api_v00/clubs/:id          - Listado de club indicado por id.
- /api_v00/clubs/select/:id      - Listado de todos los clubs con id y opción de la ciudad
                            indicado por id.

##### POST
- /api_v00/clubs/          - Objeto JSON de club con id.


##### PUT
- /api_v00/clubs/:id       - Objeto JSON de club indicado por id.


### Companies----------------------------------------------------

##### GET
- /api_v00/companies/            - Listado de todas las compañias.
- /api_v00/companies/:id         - Listado de compañía indicado por id.
- /api_v00/companies/select/:id  - Listado de todos las compañías con id y opción de la ciudad
                            indicado por id.

##### POST
- /api_v00/companies/          - Objeto JSON de compañía sin id. (El id es auto increment).

##### PUT
- /api_v00/companies/:id       - Objeto JSON de compañía indicado por id.

### Dress Code----------------------------------------------------

##### GET
- /api_v00/dresscode/         - Listado de todos los códigos de vestimenta.
- /api_v00/dresscode/:id      - Listado de codigos de vestimenta indicado por id.
##### POST
- /api_v00/dresscode/          - Objeto JSON de código de vestimenta sin id. (El id es auto increment).

##### PUT
- /api_v00/dresscode/:id       - Objeto JSON de código de vestimenta indicado por id.

### Events----------------------------------------------------

##### GET
- /api_v00/events/            - Listado de todos los eventos.
- /api_v00/events/:id         - Listado de evento indicado por id.
- /api_v00/events/select/:id  - Listado de todos los eventos con id y opción de la ciudad
                                indicado por id.

##### POST
- /api_v00/events/          - Objeto JSON de evento con id.


##### PUT
- /api_v00/events/:id       - Objeto JSON de evento indicado por id.

### Musics----------------------------------------------------

##### GET
- /api_v00/musics/            - Listado de todos los tipos de música.
- /api_v00/musics/:id         - Listado de música indicado por id.
- /api_v00/musics/select/:id  - Listado de todos los clubs con id y opción de la ciudad
                                indicado por id.

##### POST
- /api_v00/musics/          - Objeto JSON de música sin id. (El id es auto increment).

##### PUT
- /api_v00/musics/:id       - Objeto JSON de música indicado por id.



### Roles----------------------------------------------------

##### GET
- /api_v00/roles/             - Listado de todos los roles.
- /api_v00/roles/:id          - Listado de rol indicado por id.

##### POST
- /api_v00/roles/          - Objeto JSON de rol sin id. (El id es auto increment).

##### PUT
- /api_v00/roles/:id       - Objeto JSON de rol indicado por id.


### Slots----------------------------------------------------

##### GET
- /api_v00/slots/             - Listado de todos los slots.
- /api_v00/slots/:id          - Listado de slot indicado por id.
- /api_v00/slots/select/:id   - Listado de todos los slots con id y opción del club
                            indicado por id.

##### POST
- /api_v00/slots/          - Objeto JSON de slot sin id. (El id es auto increment).

##### PUT
- /api_v00/slots/:id       - Objeto JSON de slot indicado por id.


### Users----------------------------------------------------

##### GET
- /api_v00/users/             - listado de todos los usuarios.
- /api_v00/users/:id          - listado de usuario indicado por id.
- /api_v00/users/select/:id   - listado de todos los usuarios con id y opción del rol
                            indicado por id.

##### POST
- /api_v00/users/             - Objeto JSON de usuario sin id. (El id es auto increment).

##### PUT
- /api_v00/users/:id          - Objeto JSON de usuario indicado por id.




### Controlador imágenes----------------------------------------------------

##### GET
- /api_v00/<clubs|poducts|events|clubevents>/             - listado de todos los usuarios.
- /api_v00/users/:id          - listado de usuario indicado por id.
- /api_v00/users/select/:id   - listado de todos los usuarios con id y opción del rol
                            indicado por id.

##### POST
- /api_v00/users/             - Objeto JSON de usuario sin id. (El id es auto increment).

##### PUT
- /api_v00/users/:id          - Objeto JSON de usuario indicado por id.


### Poner en marcha el servidor ****************************



#### Módulos a instalar con npm i----------------------------

    -cors.
	-express.
	-express-parser.
	-express-session.
	-jsonwebtoken.
	-moment.
	-mysql.
	-nodemon (npm i nodemon --dev).

#### En el apartado de scripts añadir "start": "nodemon index".

#### Para iniciar el servidor solo basta con npm start. Con el módulo nodemon instalado se reiniciará automáticamente cuando hagas algún cambio. No hace falta reiniciarlo manualmente.