<?php

/** 
 * ***** Area de control ******************* 
 */
define('API_BASE_DEVELOPPER', "https://localhost:3800/");   //direccion base
define('API_BASE_PRODUCTION', "https://api.wolpray.es/");   //direccion base

if (!empty($_SERVER['HTTPS']) && (strtolower($_SERVER['HTTPS']) == 'on' || $_SERVER['HTTPS'] == '1')) {
    $scheme = 'https';
} else {
    $scheme = 'http';
}
 
define('VERSION_API', "api_v00");
//define('API_URL', API_BASE_DEVELOPPER . VERSION_API . '/');
if (isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] == 'localhost') {
    define('URL_PHP_DEVELOPPER',  $scheme . '://' . $_SERVER['HTTP_HOST'] );
    define('API_URL', API_BASE_DEVELOPPER . VERSION_API . '/');
    define('URL_PHP', URL_PHP_DEVELOPPER . '/PHP_Externo/');
} else {
    define('URL_PHP_PRODUCTION',  $scheme .'://' . $_SERVER['HTTP_HOST'] );
    define('API_URL', API_BASE_PRODUCTION . VERSION_API . '/');
    define('URL_PHP', URL_PHP_PRODUCTION . '/PHP_Externo/');
}

define('LPPAGINA', 5);      