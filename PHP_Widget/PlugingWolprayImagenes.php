<?php

/*
Plugin Name: Imágenes de Wolpray
Plugin URI: https://www.recursosformacion.com/
Description: Presentar, segun opción, una imagen de club 
o de Evento, de forma aleatoria
Version: 1.0
Author: Miguel
Author URI: https://www.recursosformacion.com/
*/

// Block direct access to file
defined('ABSPATH') or die('Not Authorized!');

/**
 * Función que registra el Widget
 */
function WPW_Create_widget()
{
    include_once(plugin_dir_path(__FILE__) . '/widget/Wolpray_Imagenes.php');
    register_widget('WolprayImagenes');
}
/**
 * Función que registra el estilo del Widget
 */
function WPW_Encola_estilo()
{
    wp_register_style('widget_cta_css', plugins_url('assets/css/estilo.css', __FILE__));
    wp_enqueue_style('widget_cta_css');
}

add_action('widgets_init', 'WPW_Create_widget');
add_action('wp_enqueue_scripts', 'WPW_Encola_estilo');
