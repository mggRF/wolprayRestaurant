<?php

/*
Plugin Name: Mi primer Widget
Plugin URI: https://www.recursosformacion.com/
Description: Crea un Widget para añadir a cualquier Sidebar.
Version: 1.0
Author: Miguel
Author URI: https://www.recursosformacion.com/
*/

/**
 * Función que instancia el Widget
 */
function WPW_Create_widget()
{
    include_once(plugin_dir_path(__FILE__) . '/Wolpray_Imagenes.php');
    register_widget('WolprayImagenes');
}
add_action('widgets_init', 'WPW_Create_widget');
