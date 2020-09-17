<?php
// $diccio is of type "Scripting.Dictionary"
pon("\"","&quot;");
pon("&","&amp;");
pon("<","&lt;");
pon(">","&gt;");
pon("€","&euro;");
pon(" ","&nbsp;");
pon("Á","&Aacute;");
pon("á","&aacute;");
pon("Â","&Acirc;");
pon("â","&acirc;");
pon("´","&acute;");
pon("À","&Agrave;");
pon("à","&agrave;");
pon("Ä","&Auml;");
pon("ä","&auml;");
pon("|","&brvbar;");
pon("Ç","&Ccedil;");
pon("ç","&ccedil;");
//	pon "^","&ccedil;" '
pon("®","&copy;");
pon("É","&Eacute;");
pon("é","&eacute;");
pon("Ê","&Ecirc;");
pon("ê","&ecirc;");
pon("È","&Egrave;");
pon("è","&egrave;");
pon("Ë","&Euml;");
pon("ë","&euml;");
pon("Í","&Iacute;");
pon("í","&iacute;");
pon("Î","&Icirc;");
pon("î","&icirc;");
pon("¡","&iexcl;");
pon("Ì","&Igrave;");
pon("ì","&igrave;");
pon("Ï","&Iuml;");
pon("ï","&iuml;");
pon("¿","&iquest;");
pon("Ñ","&Ntilde;");
pon("ñ","&ntilde;");
pon("Ó","&Oacute;");
pon("ó","&oacute;");
pon("Ô","&Ocirc;");
pon("ô","&ocirc;");
pon("ª","&ordf;");
pon("º","&ordm;");
pon("Ò","&Ograve;");
pon("ò","&ograve;");
pon("Ö","&Ouml;");
pon("ö","&ouml;");
pon("~","&tilde;");
pon("Ú","&Uacute;");
pon("ú","&uacute;");
pon("Û","&Ucirc;");
pon("û","&ucirc;");
pon("Ù","&Ugrave;");
pon("ù","&ugrave;");
pon("Ü","&Uuml;");
pon("ü","&uuml;");
pon("·","&middot;");
pon("Œ","&OElig;");
pon("œ","&oelig;");
pon("Ÿ","&#376;");
pon("ÿ","&yuml;");
//**************************************************************************************
//           Response.write "<br/>charset=" & Response.Charset & "<br />"
//           Response.write "codepage=" & Response.Codepage & "<br />"
//			response.write "Session codepage=" & Session.CodePage & "<br />"
function montaEtiqueta($tag,$clase="",$contenido="",$id="")
{
    extract($GLOBALS);

    if (sivacio($tag))
    {
        $tag="span";
    }
    $salida="<".$tag." ";
    if (!(sivacio($clase)))
    {

        if ((strpos($clase,"=") ? strpos($clase,"=")+1 : 0)>0)
        {

            $salida=$salida." ".$clase." ";
        }
        else
        {

            $salida=$salida."class=\"".$clase."\" ";
        }

    }

    $salida=$salida.">".$contenido."</".$tag.">";
    $function_ret=$salida;
    return $function_ret;
}
function montaLineaPar($clase,$label,$contenido,$id=""){
	$idLab="";
	$idCon="";
	$claseLab="";
	$claseCon="";
	if (!empty($id)){
		$idLab=$id."_label";
		$idCon=$id."_contenido";
	}if (!empty($clase)){
		$claseLab=$clase."_label";
		$claseCon=$clase."_contenido";
	}
	return montaEtiqueta("div", $clase, montaEtiqueta('label',$claseLab,$label,$idLab).
								montaEtiqueta('div',$claseCon,$contenido,$idCon));
}
function creaHtmlTextArea($nombre,$contenido="",$clase="",$maxleng=1000){
	$out=creaHtmlBasico('textarea',$nombre,"",$clase,$maxleng,false);
	$out.=str_replace("'", "\'", htmlspecialchars($contenido));
	$out.=creaHtmlCierre('textarea');
	return $out;
}
function creaHtmlBasico($etiqueta,$nombre,$contenido="",$clase="",$maxleng=1000,$cerrar){
	$lin=round($maxleng/80)+1;
	$lin=$lin>10?10:$lin;
	$out="<".$etiqueta;
	$out.=creaHtmlTag('class',$clase);
	$out.=creaHtmlTag('maxleng',$maxleng);
	$out.=creaHtmlTag('id',$nombre);
	$out.=creaHtmlTag('name',$nombre);
	$out.=creaHtmlTag('rows',$lin);
	$out.=$cerrar?'/>':'>';
	return $out;
}
function creaHtmlTag($etiqueta,$valor=""){
	if ($etiqueta=="") return "FaltaEtiqueta";
	return $valor=="" ?" ":' '.$etiqueta.'="'.$valor.'" ';
}
function creaHtmlCierre($etiqueta){
	return '</'.$etiqueta.'>';
}

function creaEnlace($texto,$direccion,$parametros,$clase){
	$salida="";
	if ($direccion=='') 
		$salida=$texto;
	else
		{
		$salida = "<a ";
		if ($clase!='')
			$salida = $salida . 'class= "'.$clase .'"';
		$salida = $salida. 'href="' . $direccion; 
		if ($parametros!='') 
			$salida = $salida . "?" . $parametros ;
		$salida = $salida .'">' . quitaParrafo($texto) . "</a>";
		}

	return $salida;
}
function montaTR($clase,$contenido)
{
    extract($GLOBALS);

    $function_ret=montaEtiqueta("tr",$clase,$contenido);
    return $function_ret;
}
function montaTH($clase,$contenido)
{
    extract($GLOBALS);

    $function_ret=montaEtiqueta("th",$clase,$contenido);
    return $function_ret;
}
function montaTD($clase,$contenido)
{
    extract($GLOBALS);

    $function_ret=montaEtiqueta("td",$clase,$contenido);
    return $function_ret;
}
function verHTML($texto)
{
    extract($GLOBALS);

    $function_ret=str_replace(">","&gt;",str_replace("<","&lt;",$texto));
    return $function_ret;
}

function borraEtiqueta($text,$etiq2)
{
    extract($GLOBALS);
    //---borra la etiqueta indicada (p.e "span" borrara <span clas......>'
    $txtEOF=false;
    while(!($txtEOF))
    {

        $etiq=$etiq2;
        $text=borrar($text,$etiq);
 

    }
    $function_ret=$text;
    return $function_ret;
}
function borraTodoItem($text,$etiq2)
{
    extract($GLOBALS);
    //--localiza la etiqueta de apertura primera y borra hasta la etiqueta de cierre primera- Reiterativo'
    $txtEOF=false;
    while(!($txtEOF))
    {

        $etiq=$etiq2;
        $text=borraItem($text,$etiq);
        if (!$Response->IsClientConnected)
        {

            exit();

        }


    }
    $function_ret=$text;
    return $function_ret;
}
function extraer($datos,$etiqueta)
{
    extract($GLOBALS);
    //-- extrae los datos contenidos dentro de una etiqueta --'
    $ori=(strpos($datos,"<".$etiqueta) ? strpos($datos,"<".$etiqueta)+1 : 0);
    if ($ori>0)
    {

        $ori1=(strpos($datos,">",$ori) ? strpos($datos,">",$ori)+1 : 0);
        $fin=(strpos($datos,"</".$etiqueta,$ori) ? strpos($datos,"</".$etiqueta,$ori)+1 : 0);
        if ($fin>0){
            $fin2=(strpos($datos,">",$fin) ? strpos($datos,">",$fin)+1 : 0);
            if ($fin2==0)
                $fin2=strlen($datos);
        }
        else
            $fin2=strlen($datos);

        $function_ret=substr($datos,$ori1+1-1,$fin-$ori1-1);
        $dbg->mostrar("<br>".verHtml($datos)."/ori=".$ori1."/fin=".$fin);
        $dbg->mostrar("<br> etiq=".$etiqueta."=".substr($datos,$ori1+1-1,$fin-$ori1-1));
    }
    else
        $function_ret=$datos;
    return $function_ret;
}


function BorraItem($datos, $etiqueta) {
    // response.Write "<hr/>" '
    // response.Write verhtml(left(datos,50)) & "<br/>" '
    // response.write "<br/> busco item " & etiqueta & "->"'
    $txtEOF=true;
    $ori=strpos($datos,"<".$etiqueta,0);
    if ($ori > 0) {
        $fq=strpos($datos,">",$ori);
        $fb=strpos($datos," ",$ori);
        if ($fb > 0 && $fb < $fq) {
            $fq=$fb;
        }
        $etitemp=substr($datos,$ori,$fq-$ori-1);
        //  response.Write " mid(datos," & ori+1 & "," & Instr(ori,datos,">") & "-" & ori & ")->" '
        //  response.write "&lt;" & verHTML(etitemp ) & "&gt;<br>"         '
        //  response.Write "/" & Instr(etitemp,"/") & "/"           '
        if (substr($etiqueta,-1) == ":") {
            $etiqueta=$etitemp;
        }
        if (substr($etitemp,-1) == "/") {
            //es etiqueta autocerrada'
            $_retval=borrar($datos, $etiqueta); // WARNING: assuming borrar is an external function
        }
        else {
            $fin=strpos($datos,"</".$etiqueta,$ori);
            if ($fin > 0) {
                $fin2=strpos($datos,">",$fin);
                if ($fin2 == 0) {
                    $fin2=strlen($datos);
                }
            }
            else {
                $fin2=strlen($datos);
            }
            //   response.write "ori=" & ori & " fin2=" & fin2 & "&nbsp;"       '
            //   response.write " eliminado=" & verHTML(mid(datos,ori,fin2-ori+1))      '
            $_retval=substr($datos,0,$ori-1).substr($datos,$fin2,strlen($datos));
            $txtEOF=false;
        }
    }
    else {
        $_retval=$datos;
    }
    // response.Write "<br/>"                  '
    return $_retval;
}
function borrar($datos, $etiqueta) {
    //--------borra una etiqueta <etiqueta>----------------------'
    // response.Write "<hr/>"                  '
    fb( " busco " . $etiqueta . "-->");             
    $txtEOF=true;
    if (strlen($etiqueta) > 0) {
        $ori=strpos($datos,"<".$etiqueta);
        if ($ori > 0) {
            $txtEOF=false;
            $fin2=strpos($datos,">",$ori);
            if ($fin2 == 0) {
                $fin2=strlen($datos);
            }
            fb("ori=".$ori . " fin2=".$fin2 . "&nbsp;");       
            $datos=substr($datos,0,$ori-1).substr($datos,$fin2,strlen($datos));
        }
    }
    // response.Write "<br/>"'
    return $datos;
}

function montaOption($valor, $texto, $selected) {
    $salida="<option value=\"".$valor."\" ";
    if ($selected) {
        $salida.=" selected ";
    }
    $salida.=">".$texto."</option>";
    return $salida;
}
function cambiaHTML2TEXT($texto) {
//     //conversion texto<->HTML
//     //  response.Write "<br>entra-"&texto&"<br>"
//     $a=_instr(0,$texto,"&",0);
//     if (($a > 0)) {
//         $b=_instr($a + 1,$texto,";",0);
//         if (($b > $a)) {
//             $valor=substr($texto,$a-1,$b + 1-$a);
//             //    response.write "b="&b&" "&"valor="&valor
//             if ((array_key_exists($valor,diccio))) {
//                 //     response.Write "-Existe-" & diccio.Item(valor)&"|<br>" // WARNING: assuming diccio is an external function
//                 $sustituto=diccio->Item[$valor]; // WARNING: assuming diccio is an external array
//             }
//             else {
//                 $sustituto=chr(1).substr($valor,1,strlen($valor));
//             }
//             //    response.Write mid(texto,1,a-1)&"/"'
//             //    response.Write sustituto&"/"'
//             //    response.Write mid(texto,b+1,len(texto))'
//             $texto=substr($texto,0,$a-1).$sustituto.substr($texto,$b,strlen($texto));
//             $texto=$_retval($texto);
//         }
//     }
//     $_retval=str_replace(chr(1),"&",$texto);
//     //  response.write "--------------------------------<br>"'
     return $texto;
}

function pasa2Entities($texto) {
//     //convierte texto a entities HTML
//     if (!(sivacio($texto))) {
//         foreach (diccio() as $tipo) {
//             $texto=str_replace(diccio[$tipo],$tipo,$texto); // WARNING: assuming sivacio is an external array assuming diccio is an external function assuming diccio is an external array
//         }
//     }
     return $texto;
}

function pon($texto, $html) {
//     //  response.write html & ">" & texto & "|"'
//     diccio->add($html, $texto); // WARNING: assuming diccio is an external function
}

function quitaParrafo($salida) {

    if (sivacio($salida)) {
        $_retval=""; // WARNING: assuming sivacio is an external array
    }
    else {
        $_retval=str_replace("<p>","",str_replace("</p>","<br/>",$salida));
    }
    return $_retval;
}

function borrarParrafo($salida) {
    if (sivacio($salida)) {
        $_retval=$salida; // WARNING: assuming sivacio is an external array
    }
    else {
        $_retval=borraetiqueta(borraEtiqueta($salida, "p"), "/p"); // WARNING: assuming borraEtiqueta is an external function assuming borraetiqueta is an external function
    }
    return $_retval;
}

function presentaElemento($etiqueta, $clase, $valor) {
    $GLOBALS['UltimaEtiqueta']=$etiqueta;
    $out=presentaEtiqueta($etiqueta, $clase);
    $out.=$valor;
    $out.=cierraEtiqueta($GLOBALS['UltimaEtiqueta']);
    return $out;
}

function presentaEtiqueta($etiqueta, $clase) {
    $id="";
    $tmp=substr($clase,0,1);
    if (($tmp == "#")) {
        $id=substr($clase,1,99);
        $clase="";
    }
    if (($etiqueta != "")) {
        $out="<".$etiqueta;
    }
    if (($clase != "")) {
        if (($etiqueta == "")) {
            $out="<span ";
            $GLOBALS['UltimaEtiqueta']="span";
        }
        $out.=" class=\"".$clase."\"";
    }
    if (($id != "")) {
        if (($etiqueta == "")) {
            $out="<span ";
            $GLOBALS['UltimaEtiqueta']="span";
        }
        $out.=" id=\"".$id."\"";
    }
    if (($out != "")) {
        $out.=">";
    }
    return $out;
}

function cierraEtiqueta($etiqueta) {
    if (($etiqueta != "")) {
        $_retval="</".$etiqueta.">";
    }
    return $_retval;
}
function etiquetaSiLleno($etiqueta,$contenido){
	$out="";
	if ($contenido!=""){
		$out.= montaEtiqueta($etiqueta,"",$contenido)."\r\n";
	}
	return $out;
}
function etiquetaCDATASiLleno($etiqueta,$contenido){
	$out="";
	if ($contenido!=""){
		$out.= montaEtiqueta($etiqueta,"","<![CDATA[".$contenido."]]>")."\r\n";
	}
	return $out;
}
function creaEntradilla($texto,$maximo=0){
	if ($texto!=null){
		$pos=stripos($texto, '<!--more-->');
		if ($pos === false) {
			if ($maximo!=0){
				$texto=strip_tags($texto); 	//borro todos los tag 
				$longitud=strlen($texto);
				if ($maximo>$longitud) $maximo=$longitud;
				if ($maximo<11) return $texto;
				$pos=$maximo;
				
				$pos=stripos($texto,' ',$maximo-10);  //busco el primer blanco desde 10 posiciones antes de fin
				return substr($texto,0,$pos). "...";
			}
			return $texto;
		}
		else
			return substr($texto,0,$pos);
	}
	else {
		return '';
	}
}

// -----------------------------------------
// URL decode to retrieve the original value

function limpia($texto) {
    $texto=preg_replace("#\s{2,}|&nbsp;#", "", $texto);
   // $texto=trim(html_entity_decode(strip_tags($texto)));
	$texto=str_replace('<', '"', $texto);
	$texto=str_replace('>', '"', $texto);
	return $texto;
}

// url maker function, remove duplicated vars

// exemple
// makeUrl('index.php', $_SERVER['QUERY_STRING'], 'name=value&name2=value2');

function makeUrl($path, $qs = false, $qsAdd = false)
{
    $var_array = array();
    $varAdd_array = array();
    $url = $path;

    if($qsAdd)
    {
        $varAdd = explode('&', $qsAdd);
        foreach($varAdd as $varOne)
        {
            $name_value = explode('=', $varOne);

            $varAdd_array[$name_value[0]] = $name_value[1];
        }
    }

    if($qs)
    {
        $var = explode('&', $qs);
        foreach($var as $varOne)
        {
            $name_value = explode('=', $varOne);

            //remove duplicated vars
            if($qsAdd)
            {
                if(!array_key_exists($name_value[0], $varAdd_array))
                {
                    $var_array[$name_value[0]] = $name_value[1];
                }
            }
            else
            {
                $var_array[$name_value[0]] = $name_value[1];
            }
        }
    }

    //make url with querystring
    $delimiter = "?";

    foreach($var_array as $key => $value)
    {
        $url .= $delimiter.$key."=".$value;
        $delimiter = "&";
    }

    foreach($varAdd_array as $key => $value)
    {
        $url .= $delimiter.$key."=".$value;
        $delimiter = "&";
    }

    return $url;
}
function normalizaURL($direccion=""){
	if ($direccion!="") {
		if (strtolower(substr($direccion,0,4))!="http")
			return "http://".$direccion;
		else {
			return $direccion;
		}
	}
	return "";
}
function salidaEmergente($direccion,$tiempoCierre=0){
	$salida="";
	$salida.="<a id='anclaAutomatica' href='$direccion' title=''></a>";
	
    $rutina="
    \$(document).ready(function() {

        \$('#anclaAutomatica').fancybox({
			'width'				: 640,
			'height'			: 480,
	        'autoScale'     	: false,
	        'autoSize'			: false,
    		'type'				: 'iframe',
	        'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			";
    if ($tiempoCierre>0){
		$rutina.="'onComplete': function(){
				    setTimeout( function() {\$.fancybox.close(); },$tiempoCierre*1000); // 5000 = 5 secs
				  }";
    };
	$rutina.="
		});

		\$('#anclaAutomatica').eq(0).trigger('click');
    });	";
  
 //	Yii::app()->clientScript->registerScript('emergenteAutomatico',$rutina,CClientScript::POS_READY);
	$salida.="<script>".$rutina."</script>";
	return $salida;
}
function sivacio($var)
{
    if (isset($var) && $var != "") {
        return false;
    }
    return true;

}
?>
