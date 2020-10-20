<?php

/** 
 * ***** Area de control ******************* 
 */
defined('API_BASE_DEVELOPPER') or define('API_BASE_DEVELOPPER', "https://localhost:3800/");   //direccion base
defined('API_BASE_PRODUCTION') or define('API_BASE_PRODUCTION', "https://api.wolpray.es:3800/");   //direccion base

defined('VERSION_API') or define('VERSION_API', "api_v00");

if (isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] == 'localhost') {
    defined('API_URL') or define('API_URL', API_BASE_DEVELOPPER . VERSION_API . '/');
} else {
    defined('API_URL') or define('API_URL', API_BASE_PRODUCTION . VERSION_API . '/');
}
defined('URL_PHP') or define('URL_PHP', 'http://localhost/PHP_Externo/');
defined('LPPAGINA') or define('LPPAGINA', 5);                             //lineas por pagina)