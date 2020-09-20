<?php

defined('DIR_ROOT') or define('DIR_ROOT', dirname(dirname(__FILE__)));

require_once DIR_ROOT . '/includes/constantes.php';
require_once DIR_ROOT . '/includes/accesoURL.php';
//require_once DIR_ROOT . '/funciones/FuncionesHTML.php';
//require_once DIR_ROOT . '/funciones/Request.php';

//use App\service\Request;


function WPI_consigue($tabla, $size = LPPAGINA, $clasificacion = "")
{
    $req = new Request();
    $ruta = $tabla;
    $query = '_size=' . $size;
    if (!is_null($clasificacion) && $clasificacion != "") {
        $query .= '&_class=' . $clasificacion;
    }
    //echo $ruta . '/' . $query;
    return json_decode(RFW_accederRemoto($ruta, $query))->Datos;
}
function WPI_listaClubs()
{
    $listaC = WPI_consigueCitys();

    foreach ($listaC as $registro) {
        echo '<h3 class="nombrePoblacion">' . $registro->option . '<h3>';
        $listaClubs = WPI_consigueClubsXCity($registro->id);
        foreach ($listaClubs as $registro) {
            echo '<div class="divImagen">';
            echo '<a class="aImagen" href="' . $salto . '" >';
            echo '<img class="paraImagen"  src="' . $registro->coverUrl . '"/>';
            echo '</a>';
            echo '<span class="nombreClub">' . $registro->clubName . '</span>';
            echo '</div>';
        }
    }
}
function WPI_consigueCitys()
{
    $query = '_size=500&_class=cityName';
    $ruta = 'clubs/citys';
    return json_decode(RFW_accederRemoto($ruta, $query))->Datos;
}
function WPI_consigueClubsXCity($city)
{
    $query = '_size=10&clubs.cityid=' . $city;
    $ruta = 'clubs';
    return json_decode(RFW_accederRemoto($ruta, $query))->Datos;
}

