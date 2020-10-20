<?php
defined('DIR_ROOT') or define('DIR_ROOT', dirname(dirname(__FILE__)));

require_once DIR_ROOT . '/includes/constantes.php';
require_once DIR_ROOT . '/includes/accesoURL.php';
//require_once DIR_ROOT . '/funciones/FuncionesHTML.php';
require_once DIR_ROOT . '/funciones/Request.php';


use App\service\Request;


$req = new Request();
$nombeClub = $req->getParam('club');
$clave = urldecode($nombeClub);

$club = datosClub($clave);  //Consigo datos club

$masDias = is_numeric($club['DiasAnticipacion']) ? $club['DiasAnticipacion'] : 5;
$toTime = "+" . $masDias . " day";
$fechaI = date("Y/m/d");
$fechaF = date("Y/m/d", strtotime($toTime));
$slots = datosSlots($club['clubid'], $fechaI, $fechaF);  //Consigo datos slots
$events = datosEvents($club['clubid'], $fechaI, $fechaF); //consigo datos eventos
$cabeTitulo = $club['clubName'];

$tpl = "vistaClub.php";
include DIR_ROOT . '/templates/formaWp.tpl.php';

/**
 * Dado el nombre del club, consigue los datos
 */
function datosClub($nombre)
{
    return procesaEnvio('clubs/byName', 'clubname=' .urlencode($nombre) )[0];
}

/**
 * Dado el id de un club y un tramo de fechas, 
 * consigue los registros de eslots
 */
function datosSlots($idClub, $fini, $ffin)
{
    $clausula = '_entre=day,' .
        $fini . ',' . $ffin .
        '&slots.clubid=' . $idClub .
        '&slots.listaVip=1';
   
    return procesaEnvio('slots/', $clausula);
}



/**
 * dado el id de un club y los tramos de fecha, consigue los eventos
 */
function datosEvents($idClub, $fini, $ffin)
{
    // $clausula = '_desde=event_initDate,' . $fini .
    //     '&_hasta=event_endDate,' . $ffin .
    //     '&events.clubid=' . $idClub;
    $clausula=''; 
    return procesaEnvio('events/', $clausula);
}

function procesaEnvio($ruta, $param)
{
    $salida = RFW_accederRemoto($ruta, $param);
    $recibe = json_decode($salida, true);
    if ($recibe['Ok']) {
        return $recibe['Datos'];
    } else {
        echo $recibe['Message'];
        return [];
    }
}

function arreglaHorarios($club)
{
    $h1 = ajusta($club['openSeason1'], $club['closingSeason1']);
    $h2 = ajusta($club['openSeason2'], $club['closingSeason2']);
    $h3 = ajusta($club['openSeason3'], $club['closingSeason3']);
    return $h1 . ' ' . $h2 . ' ' . $h3;
}
function ajusta($desde, $hasta)
{
    if ($desde && $desde != '' && $hasta && $hasta != '') {
        return 'de ' . $desde . ' a ' . $hasta;
    }
}

function mensajeLimite($club)
{

    $salida="";
    if ($club['limit_por'] > 0) {
        $salida .='Aforo autorizado: ';
        $salida .=$club['limit_val'];
        $salida .=' - ';
        $salida .=$club['limit_mess'];
        $salida .=' (limite' . $club['limit_por'] . '%) ';
    } else {
        $salida = 'Sin limitaciones';
    }
    return $salida;
}