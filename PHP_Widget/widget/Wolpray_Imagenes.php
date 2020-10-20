<?php
require_once dirname(dirname(__FILE__)) . '/funciones/accesoURL.php';
/**
 * los datos recibidos son:
 * id: id de donde se saca la informacion
 * table: Tabla de donde sale la informacion
 * image: url de la imagen que entrega
 * comment: texto generado de publicidad sobre la imagen
 */
define("WPIW_URL_BASE", plugin_dir_url(__DIR__));

class WolprayImagenes extends WP_Widget
{
    public function __construct()
    {
        parent::__construct(
            'id_widget',
            __('Imagenes desde Wolpray', 'wolpray_imagenes'),
            array(
                'description' => __('Obtiene imagenes de clubs o de eventos desde la web de Wolpray', 'wolpray_imagenes'),
                'classname'   => 'wip_css_widget',
            )
        );
    }

    public function widget($args, $instance)
    {
        $opcion  = apply_filters('widget_text',  empty($instance['wpiw_imagenAobtener']) ? '' : $instance['wpiw_imagenAobtener'],  $instance);
        if ($opcion == '') return;

        // Before widget tag
        echo $args['before_widget'];
        $datos = accederRemoto('imagenes/' . $opcion, '');
        $datos = json_decode($datos)->Datos;
        $imagen = $datos->image;
        $comentario = $datos->comment;
        $link = $datos->url;
        if (empty($link) || $link == "") $link = '#';
        if ($imagen == '')
            $imagen = WPIW_URL_BASE . 'assets/noHayImagen.jpg';
        $enlace = creaEnlace('<img src="' . $imagen . '" />', $link, '', 'wipimg');
        if ($comentario == "" ) {
            $comentario = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est assumenda quis ab dolorum commodi dolorem pariatur dolores minima, accusantium quod quasi quisquam possimus numquam eum magnam laborum, mollitia eius nihil.";
        }
        
        
        // Text
        echo '<div class="gralwim">';
        echo montaEtiqueta('h2', 'wiptit','Una imagen de Wolpray');
        echo $enlace;
        echo montaEtiqueta('div', 'wipcomment',montaEtiqueta('h3', 'wiptextcomment', $comentario));
        echo '</div>';

        // After widget tag
        echo $args['after_widget'];
    }

    public function form($instance)
    {
        // Valores por defecto
        $instance = wp_parse_args((array) $instance, array(
            'wpiw_title' => 'Indique la imagen que desea obtener',
            'wpiw_imagenAobtener' => '',
        ));

        // Si existen datos en la bsae de datos los recogemos para mostrarlos
        $wpiw_imagenAobtener = !empty($instance['wpiw_imagenAobtener']) ? $instance['wpiw_imagenAobtener'] : '';

        echo '<p>';
        echo ' <label for="' . $this->get_field_id('wpiw_imagenAobtener') .
            '" class="wpiw_imagenAobtener_label">' .
            __('Opcion deseada', 'text_domain') .
            '</label>';
        echo ' <select id="' . $this->get_field_id('wpiw_imagenAobtener') .
            '" name="' . $this->get_field_name('wpiw_imagenAobtener') .
            '" class="widefat" ' .
            '" value="' . esc_attr($wpiw_imagenAobtener) . '"' .
            '>';
        echo '		<option value="club" ' .
            selected($wpiw_imagenAobtener, 'club', false) . '> '
            . __('clubs', 'text_domain') .
            '</option>';
        echo '		<option value="event" ' .
            selected($wpiw_imagenAobtener, 'event', false) . '> ' .
            __('eventos', 'text_domain') .
            '</option>';
        echo '		<option value="clubevent" ' .
            selected($wpiw_imagenAobtener, 'clubevent', false) . '> ' .
            __('clubs y eventos', 'text_domain') .
            '</option>';

        echo '	</select>';
        echo '</p>';
    }

    public function update($new_instance, $old_instance)
    {
        $instance = $old_instance;

        $instance['wpiw_imagenAobtener'] = !empty($new_instance['wpiw_imagenAobtener']) ? strip_tags($new_instance['wpiw_imagenAobtener']) : '';

        return $instance;
    }
}

function WolprayImagenes_register_widgets()
{
    register_widget('WolprayImagenes');
}
add_action('widgets_init', 'WolprayImagenes_register_widgets');
//https://danielcastanera.com/guia-basica-crear-widgets-wordpress/