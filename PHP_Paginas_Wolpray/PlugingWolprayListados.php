<?php
define('DIR_ROOT', dirname(__FILE__));

require_once DIR_ROOT . '/works/WolprayListados.php';
/*
Plugin Name: Listados de Wolpray
Plugin URI: https://www.recursosformacion.com/
Description: Listados de eventos y clubs
Version: 1.0
Author: Miguel
Author URI: https://www.recursosformacion.com/
*/

// Block direct access to file
defined('ABSPATH') or die('Not Authorized!');
/*
Limpieza
*/
// Clean up wp_head
// Remove Really simple discovery link
//remove_action('wp_head', 'rsd_link');
// Remove Windows Live Writer link
//remove_action('wp_head', 'wlwmanifest_link');
// Remove the version number
//remove_action('wp_head', 'wp_generator');
// Remove curly quotes
////remove_filter('the_content', 'wptexturize');
//remove_filter('comment_text', 'wptexturize');
 
// Allow HTML in user profiles
//remove_filter('pre_user_description', 'wp_filter_kses');
/**
 * Función que registra 
 */
function WPW_Create_ShortCode_ListaClubs()
{
     WPI_listaClubs();
    
}
function WPW_Create_ShortCode_ListaEvents()
{
    return '<h1> Hola Events </h1>';
}
/**
 * Función que registra el estilo del Widget
 */
function WPW_Encola_estilo_shorCode()
{
    wp_register_style('widget_cta_css', plugins_url('/assets/css/estilo.css', __FILE__));
    wp_enqueue_style('widget_cta_css');
}

add_shortcode('ListaClubs', 'WPW_Create_ShortCode_ListaClubs');
add_shortcode('ListaEvents', 'WPW_Create_ShortCode_ListaEvents');
add_action('wp_enqueue_scripts', 'WPW_Encola_estilo_shorCode');
