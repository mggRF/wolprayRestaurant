<?php

/** 
 * ***** Area de control ******************* 
 */
define('API_BASE_DEVELOPPER', "http://localhost:3800/");   //direccion base
define('API_BASE_PRODUCTION', "http://api.wolpray.es:3800/");   //direccion base
define('URL_PHP_DEVELOPPER', 'https://localhost');
define('URL_PHP_PRODUCTION', 'https://wolpray.es');
define('VERSION_API', "api_v00");
//define('API_URL', API_BASE_DEVELOPPER . VERSION_API . '/');
if (isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] == 'localhost') {
    define('API_URL', API_BASE_DEVELOPPER . VERSION_API . '/');
    define('URL_PHP', URL_PHP_DEVELOPPER . '/PHP_Externo/');
} else {
    define('API_URL', API_BASE_PRODUCTION . VERSION_API . '/');
    define('URL_PHP', URL_PHP_PRODUCTION . '/PHP_Externo/');
}

define('LPPAGINA', 5);                             //lineas por pagina)