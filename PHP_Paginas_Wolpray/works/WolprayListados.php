<?php

defined('DIR_ROOT') or define('DIR_ROOT', dirname(dirname(__FILE__)));

require_once DIR_ROOT . '/includes/constantes.php';
require_once DIR_ROOT . '/includes/accesoURL.php';
require_once DIR_ROOT . '/assets/estilo.html';

define('IMG_IN_ROW', 6); //Imagenes por fila



function WPI_listaClubs()
{
    $listaC = WPI_consigueCitys();

    foreach ($listaC as $registro) {

        echo str_replace(":POBLACION", $registro->opcion, CUBRE_POBLACION);

        $listaClubs = WPI_consigueClubsXCity($registro->id);
        $contador = 0;
        foreach ($listaClubs as $registro) {
            $contador--;
            if ($contador <= 0) {         //se han presentado las filas o es la primera
                echo PRE_ROW;
                $contador = IMG_IN_ROW;
            }
            echo PRE_COL;
            echo '<div class="divImagen">';
            //echo '<a class="aImagen" href="' . $salto . '" >';
            //echo '<img class="paraImagen"  src="' . $registro->coverUrl . '"/>';
            //echo '</a>';
            $salto = URL_PHP . 'listados/ListarUnClub.php?club=' . urlencode($registro->clubName);
			$imagen= $registro->coverUrl; 
			
            echo str_replace(':HREF_IMAGEN', $salto, str_replace(':SRC_IMAGEN', $imagen, CUBRE_IMAGEN));
            echo str_replace(":NOMBRE_CLUB", $registro->clubName, CUBRE_NOMBRE);
            //echo '<span class="nombreClub">' . $registro->clubName . '</span>';
            echo '</div>';
            echo POST_COL;
            if ($contador == 1) {         //se han presentado las filas o es la primera
                echo POST_ROW;
            }
        }
        if ($contador != 1) {         //se han presentado las filas o es la primera
            echo POST_ROW;
        }
    }
}
function WPI_consigueCitys()
{
    $query = '_size=500&_class=cityName';
    $ruta = 'clubs/citys';
    $salida = RFW_accederRemoto($ruta, $query);
    $recibe = json_decode($salida);
    return $recibe->Datos;
}
function WPI_consigueClubsXCity($city)
{
    $query = '_size=10&clubs.cityid=' . $city;
    $ruta = 'clubs';
    return json_decode(RFW_accederRemoto($ruta, $query))->Datos;
}
