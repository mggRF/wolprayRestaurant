<?php

/**
 * 
 */
define("WPIW_URL_BASE", plugin_dir_url(__DIR__));

class WolprayRestaurant extends WP_Widget
{
    public function __construct()
    {
        parent::__construct(
            'id_widget',
            __('Wolpray', 'wolpray_imagenes'),
            array(
                'description' => __('', 'wolpray_imagenes'),
                'classname'   => 'wip_css_widget',
            )
        );
    }

    public function widget($args, $instance)
    {
        
    }

    public function form($instance)
    {
        
    }

    public function update($new_instance, $old_instance)
    {
        
    }
}

function WolprayRestaurant_register_widgets()
{
    register_widget('WolprayRestaurant');
}
add_action('widgets_init', 'WolprayRestaurant_register_widgets');
//https://danielcastanera.com/guia-basica-crear-widgets-wordpress/