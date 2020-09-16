<?php

require_once 'includes/constantes.php';
require 'includes/accesoURL.php';
require 'includes/FuncionesHTML.php';
require 'includes/Request.php';
use App\service\Request;


$datos=consigue('clubs');

print  htmlspecialchars_decode(presentaHTMLClub($datos));



function consigue($tabla)
{
    $req=new Request();
    $ruta = $tabla;
    $size = $req->getParam('size');
    $clasificacion = $req->getParam('clasificacion');
    if (is_null($size)) {
        $size = LPPAGINA;
    }
    $query = 'size=' . $size;
    if (!is_null($clasificacion)) {
        $query .= ',clasificacion=' . $clasificacion;
    }
    //echo $ruta . '/' . $query;
    return json_decode(accederRemoto($ruta, $query))->Datos;
}
function presentaHTMLClub($datos)
{
    $salida = "";
    $cabe = "";
    $cabe .= montaTH('', 'id');
    $cabe .= montaTH('', 'Club');
    $cabe .= montaTH('', 'Direccion');
    $cabe .= montaTH('', 'Ciudad');
    $cabe .= montaTH('', 'telefono');
    $cabe .= montaTH('', 'vestimenta');
    $cabe .= montaTH('', 'musica');

    $salida .= montaEtiqueta('thead', '', montaTR('', $cabe));
    $tabla = "";
    foreach ($datos as $registro) {
        $out = "";
        $out = montaTD("", $registro->clubid);
        $out .= montaTD("", $registro->clubName);
        $out .= montaTD("", $registro->streetName . '.' . $registro->streetNumber);
        $out .= montaTD("", $registro->cityName);
        $out .= montaTD("", $registro->clubPhone);
        $out .= montaTD("", $registro->dressCode);
        $out .= montaTD("", $registro->coverUrl);
        $tabla .= montaTR("", $out);
    }
    $salida .= montaEtiqueta('tbody', '', montaTR('', $tabla));
    return montaEtiqueta('table', 'table table-striped', $salida);
}
