# API wolpray




# Sistema de identificación

/Login                      Identifica al usuario y devuelve tokem.
/Logout                     Cierra la sesión de usuario.

Área de mantenimiento----- IDENTIFICADO **********************

# Países--------------------------------------------------------


/api_v00/countrys/          listado de todos los países.
/api_v00/countrys/:id       listado del país indicado por id.
/api_v00/countrys/select/   listado de todos los países con id y opción.  ///No implementado

# Comunidades Autónomas/estados----------------------------------
/api_v00/states/            listado de todos los estados/comunidades autónomas.
/api_v00/states/:id         listado del estado indicado por id.
/api_v00/states/select/     listado de todos los estados con id y opción del país
                            indicado por id.

# Provincias-----------------------------------------------------
/api_v00/provinces/         listado de todas las provincias.
/api_v00/provinces/:id      listado dela provincia indicado por id.
/api_v00/provinces/select/  listado de todas las provincias con id y opción de la CCAA 
                            indicado por id.

# Poblaciones----------------------------------------------------
/api_v00/citys/             listado de todas las poblaciones.
/api_v00/citys/:id          listado de la población indicado por id.
/api_v00/citys/select/      listado de todas las poblaciones con id y opción de la 
                            provincia indicado por id.

# Clubs----------------------------------------------------
/api_v00/clubs/             listado de todos los clubs.
/api_v00/clubs/:id          listado de club indicado por id.
/api_v00/clubs/select/      listado de todos los clubs con id y opción de la ciudad
                            indicado por id.


# Companies----------------------------------------------------
/api_v00/companies/         listado de todas las compañias.
/api_v00/companies/:id      listado de compañía indicado por id.
/api_v00/companies/select/  listado de todos las compañías con id y opción de la ciudad
                            indicado por id.

# Dress Code----------------------------------------------------
/api_v00/dresscode/         listado de todos los códigos de vestimenta.
/api_v00/dresscode/:id      listado de codigos de vestimenta indicado por id.


# Events----------------------------------------------------
/api_v00/events/            listado de todos los eventos.
/api_v00/events/:id         listado de evento indicado por id.
/api_v00/events/select/     listado de todos los eventos con id y opción de la ciudad
                            indicado por id.

# Musics----------------------------------------------------
/api_v00/musics/            listado de todos los tipos de música.
/api_v00/musics/:id         listado de música indicado por id.


# Roles----------------------------------------------------
/api_v00/roles/             listado de todos los roles.
/api_v00/roles/:id          listado de rol indicado por id.


# Slots----------------------------------------------------
/api_v00/slots/             listado de todos los slots.
/api_v00/slots/:id          listado de slot indicado por id.
/api_v00/slots/select/      listado de todos los slots con id y opción del club
                            indicado por id.


# Users----------------------------------------------------
/api_v00/users/             listado de todos los usuarios.
/api_v00/users/:id          listado de usuario indicado por id.
/api_v00/users/select/      listado de todos los usuarios con id y opción del rol
                            indicado por id.


# Poner en marcha el servidor ****************************



# Módulos a instalar con npm i----------------------------

    -cors.
	-express.
	-express-parser.
	-express-session.
	-jsonwebtoken.
	-moment.
	-mysql.
	-nodemon (npm i nodemon --dev).

En el apartado de escripts añadir "start": "nodemon index".

Para iniciar el servidor solo basta con npm start. Con el módulo nodemon instalado
se reiniciará automáticamente cuando hagas algún cambio. No hace falta reiniciarlo manualmente.