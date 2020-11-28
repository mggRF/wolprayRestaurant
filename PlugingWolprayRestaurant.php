<?php

/*
Plugin Name: Wolpray Restaurant(WPWR)
Plugin URI: https://www.wolpray.es/
Description: Servicio de restaurant. Presentacion y contratacion segun menu y carta

Version: 1.0
Author: Equipo wolpray
Author URI: https://www.Wolpray.es/
*/

// Block direct access to file
defined('ABSPATH') or die('Not Authorized!');
define('ERW_WIDGET_PATH', plugin_dir_path(__FILE__) . 'widget');           //ruta a la aplicación React.
define('ERW_ASSET_MANIFEST', ERW_WIDGET_PATH . '/build/asset-manifest.json'); //ruta al manifiesto de activos de React,
define('ERW_INCLUDES', plugin_dir_path(__FILE__) . '/includes');            //contendrá todos los archivos PHP.

require_once(ERW_INCLUDES . '/enqueue.php');
require_once(ERW_INCLUDES . '/shortcode.php');
