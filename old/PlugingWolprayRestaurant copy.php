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
define( 'ERW_WIDGET_PATH', plugin_dir_path( __FILE__ ) . '/widget' );           //ruta a la aplicación React.
define( 'ERW_ASSET_MANIFEST', ERW_WIDGET_PATH . '/build/asset-manifest.json' ); //ruta al manifiesto de activos de React,
define( 'ERW_INCLUDES', plugin_dir_path( __FILE__ ) . '/includes' );            //contendrá todos los archivos PHP.

/**
 * Función que registra el Widget
 */
function WPWR_Create_widgetRestaurant()
{
    include_once(plugin_dir_path(__FILE__) . '/widget/WolprayRestaurant.php');
    register_widget('WolprayRestaurant');
}
/**
 * Función que registra el estilo del Widget
 */
function WPW_Encola_estilo()
{
    wp_register_style('WPWR_widget_cta_css', plugins_url('assets/css/WPWR_estilo.css', __FILE__));
    wp_enqueue_style('WPWR_widget_cta_css');
}

add_action('widgets_init', 'WPWR_Create_widgetRestaurant');
add_action('wp_enqueue_scripts', 'WPWR_Encola_estilo');
