<?php

/** 
 * ***** Area de control ******************* 
 */
define('API_BASE_DEVELOPPER', "http://localhost:3800/");   //direccion base
define('API_BASE_PRODUCTION', "http://api.wolpray.es:3800/");   //direccion base

define('VERSION_API', "api_v00");
//define('API_URL', API_BASE_DEVELOPPER . VERSION_API . '/');
if (isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] == 'localhost') {
    define('API_URL', API_BASE_DEVELOPPER . VERSION_API . '/');
} else {
    define('API_URL', API_BASE_PRODUCTION . VERSION_API . '/');
}
define('URL_PHP', 'https://wolpray.es/PHP_Externo/');
define('LPPAGINA', 5);                             //lineas por pagina)