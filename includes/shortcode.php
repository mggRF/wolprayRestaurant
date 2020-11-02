<?php
// This file enqueues a shortcode.

defined( 'ABSPATH' ) or die( 'Direct script access disallowed.' );

add_shortcode( 'WPWR_menu', function( $atts ) {
  $default_atts = array();
  $args = shortcode_atts( $default_atts, $atts );

  return "<div id='WPWR_menu'></div>";
});

add_shortcode( 'WPWR_carta', function( $atts ) {
    $default_atts = array();
    $args = shortcode_atts( $default_atts, $atts );
  
    return "<div id='WPWR_carta'></div>";
  });