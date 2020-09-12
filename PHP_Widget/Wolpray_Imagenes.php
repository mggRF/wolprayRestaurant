<?php
class WolprayImagenes extends WP_Widget
{

    public function __construct()
    {
        parent::__construct(
            'id_widget',
            __('Imagenes desde Wolpray', 'wolpray_imagenes'),
            array(
                'description' => __('Obtiene imagenes de clubs o de eventos desde la web de Wolpray', 'wolpray_imagenes'),
                'classname'   => 'clase_css_widget',
            )
        );
    }

    public function widget($args, $instance)
    {
        $text  = apply_filters('widget_text',  empty($instance['demowp_campotexto']) ? '' : $instance['demowp_campotexto'],  $instance);

        // Before widget tag
        echo $args['before_widget'];


        // Text
        echo '<div class="textwidget">' . $text . '</div>';

        // After widget tag
        echo $args['after_widget'];
    }

    public function form($instance)
    {
        // Valores por defecto
        $instance = wp_parse_args((array) $instance, array(
            'demowp_demo_title' => '',
            'demowp_campotexto' => '',
        ));

        // Si existen datos en la bsae de datos los recogemos para mostrarlos
        $demowp_campotexto = !empty($instance['demowp_campotexto']) ? $instance['demowp_campotexto'] : '';

        echo '<p>';
        echo ' <label for="' . $this->get_field_id('demowp_campotexto') . '" class="demowp_campotexto_label">' . __('campo texto', 'text_domain') . '</label>';
        echo ' <input type="text" id="' . $this->get_field_id('demowp_campotexto') . '" name="' . $this->get_field_name('demowp_campotexto') . '" class="widefat" placeholder="' . esc_attr__('', 'text_domain') . '" value="' . esc_attr($demowp_campotexto) . '">';
        echo '</p>';
    }

    public function update($new_instance, $old_instance)
    {
        $instance = $old_instance;

        $instance['demowp_campotexto'] = !empty($new_instance['demowp_campotexto']) ? strip_tags($new_instance['demowp_campotexto']) : '';

        return $instance;
    }
}

function WolprayImagenes_register_widgets()
{
    register_widget('WolprayImagenes');
}
add_action('widgets_init', 'WolprayImagenes_register_widgets');
