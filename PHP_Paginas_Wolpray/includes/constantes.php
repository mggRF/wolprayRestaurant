<?php

/** 
 * ***** Area de control ******************* 
 */
defined('API_BASE_DEVELOPPER') or define('API_BASE_DEVELOPPER', "http://localhost:3800/");   //direccion base
defined('API_BASE_PRODUCTION') or define('API_BASE_PRODUCTION', "http://api.wolpray.es:3800/");   //direccion base
defined('URL_PHP_DEVELOPPER') or define('URL_PHP_DEVELOPPER', 'http://localhost');
defined('URL_PHP_PRODUCTION') or define('URL_PHP_PRODUCTION', 'http://wolpray.es');

defined('VERSION_API') or define('VERSION_API', "api_v00");

if (isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] == 'localhostx') {
    defined('API_URL') or define('API_URL', API_BASE_DEVELOPPER . VERSION_API . '/');
    defined('URL_PHP') or define('URL_PHP',URL_PHP_DEVELOPPER . '/PHP_Externo/');
} else {
    defined('API_URL') or define('API_URL', API_BASE_PRODUCTION . VERSION_API . '/');
    defined('URL_PHP') or define('URL_PHP',URL_PHP_PRODUCTION . '/PHP_Externo/');
}

defined('LPPAGINA') or define('LPPAGINA', 5);                             //lineas por pagina)