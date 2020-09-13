<?php

require_once dirname(dirname(__FILE__)) . '/includes/constantes.php';

/**
 * para una llamada http://xxx:3800/<ruta>?<query>
 * 
 * @param String $ruta  ruta a la que se debe acceder despues de los datos del servidor
 * @param String $query parametros recibidos (sobre paginacion y ordenacion)
 * 
 * @return Array Respuesta recibida o mensaje de error
 */
function accederRemoto($ruta, $query)
{
    $url = API_URL . $ruta;
    if ($query != '') $url .= '?' . $query;
    //echo "<br> . $url ;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $contents = curl_exec($ch);
    if (!$contents) {
        $contents = curl_error($ch);
    }
    curl_close($ch);
    return $contents;
}
