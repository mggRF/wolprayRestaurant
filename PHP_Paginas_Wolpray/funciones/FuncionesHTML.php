<?php

//**************************************************************************************
//           Response.write "<br/>charset=" & Response.Charset & "<br />"
//           Response.write "codepage=" & Response.Codepage & "<br />"
//			response.write "Session codepage=" & Session.CodePage & "<br />"
if (!function_exists('RFW_montaEtiqueta')) {
    function RFW_montaEtiqueta($tag, $clase = "", $contenido = "", $id = "")
    {
        extract($GLOBALS);

        if (RFW_sivacio($tag)) {
            $tag = "span";
        }
        $salida = "<" . $tag . " ";
        if (!(RFW_sivacio($clase))) {

            if ((strpos($clase, "=") ? strpos($clase, "=") + 1 : 0) > 0) {

                $salida = $salida . " " . $clase . " ";
            } else {

                $salida = $salida . "class=\"" . $clase . "\" ";
            }
        }

        $salida = $salida . ">" . $contenido . "</" . $tag . ">";
        $function_ret = $salida;
        return $function_ret;
    }
}

if (!function_exists('RFW_montaLineaPar')) {
    function RFW_montaLineaPar($clase, $label, $contenido, $id = "")
    {
        $idLab = "";
        $idCon = "";
        $claseLab = "";
        $claseCon = "";
        if (!empty($id)) {
            $idLab = $id . "_label";
            $idCon = $id . "_contenido";
        }
        if (!empty($clase)) {
            $claseLab = $clase . "_label";
            $claseCon = $clase . "_contenido";
        }
        return RFW_montaEtiqueta("div", $clase, RFW_montaEtiqueta('label', $claseLab, $label, $idLab) .
            RFW_montaEtiqueta('div', $claseCon, $contenido, $idCon));
    }
}

if (!function_exists('RFW_creaHtmlTextArea')) {
    function RFW_creaHtmlTextArea($nombre, $contenido = "", $clase = "", $maxleng = 1000)
    {
        $out = RFW_creaHtmlBasico('textarea', $nombre, "", $clase, $maxleng, false);
        $out .= str_replace("'", "\'", htmlspecialchars($contenido));
        $out .= RFW_creaHtmlCierre('textarea');
        return $out;
    }
}
if (!function_exists('RFW_creaHtmlBasico')) {
    function RFW_creaHtmlBasico($etiqueta, $nombre, $contenido = "", $clase = "", $maxleng = 1000, $cerrar)
    {
        $lin = round($maxleng / 80) + 1;
        $lin = $lin > 10 ? 10 : $lin;
        $out = "<" . $etiqueta;
        $out .= RFW_creaHtmlTag('class', $clase);
        $out .= RFW_creaHtmlTag('maxleng', $maxleng);
        $out .= RFW_creaHtmlTag('id', $nombre);
        $out .= RFW_creaHtmlTag('name', $nombre);
        $out .= RFW_creaHtmlTag('rows', $lin);
        $out .= $cerrar ? '/>' : '>';
        return $out;
    }
}
if (!function_exists('RFW_creaHtmlTag')) {
    function RFW_creaHtmlTag($etiqueta, $valor = "")
    {
        if ($etiqueta == "") return "FaltaEtiqueta";
        return $valor == "" ? " " : ' ' . $etiqueta . '="' . $valor . '" ';
    }
}
if (!function_exists('RFW_creaHtmlCierre')) {
    function RFW_creaHtmlCierre($etiqueta)
    {
        return '</' . $etiqueta . '>';
    }
}
if (!function_exists('RFW_creaEnlace')) {
    function RFW_creaEnlace($texto, $direccion, $parametros, $clase)
    {
        $salida = "";
        if ($direccion == '')
            $salida = $texto;
        else {
            $salida = "<a ";
            if ($clase != '')
                $salida = $salida . 'class= "' . $clase . '"';
            $salida = $salida . 'href="' . $direccion;
            if ($parametros != '')
                $salida = $salida . "?" . $parametros;
            $salida = $salida . '">' . RFW_quitaParrafo($texto) . "</a>";
        }

        return $salida;
    }
}
if (!function_exists('RFW_montaTR')) {
    function RFW_montaTR($clase, $contenido)
    {
        extract($GLOBALS);

        $function_ret = RFW_montaEtiqueta("tr", $clase, $contenido);
        //RFW_console_log($function_ret, true);
        return $function_ret;
    }
}
if (!function_exists('RFW_montaTH')) {
    function RFW_montaTH($clase, $contenido)
    {
        extract($GLOBALS);

        $function_ret = RFW_montaEtiqueta("th", $clase, $contenido);
        return $function_ret;
    }
}
if (!function_exists('RFW_montaTD')) {
    function RFW_montaTD($clase, $contenido)
    {
        extract($GLOBALS);

        $function_ret = RFW_montaEtiqueta("td", $clase, $contenido);
        //RFW_console_log($function_ret, true);
        return $function_ret;
    }
}
if (!function_exists('RFW_verHTML')) {
    function RFW_verHTML($texto)
    {
        extract($GLOBALS);

        $function_ret = str_replace(">", "&gt;", str_replace("<", "&lt;", $texto));
        return $function_ret;
    }
}

if (!function_exists('RFW_borraEtiqueta')) {
    function RFW_borraEtiqueta($text, $etiq2)
    {
        extract($GLOBALS);
        //---borra la etiqueta indicada (p.e "span" borrara <span clas......>'
        $txtEOF = false;
        while (!($txtEOF)) {

            $etiq = $etiq2;
            $text = RFW_borrar($text, $etiq);
        }
        $function_ret = $text;
        return $function_ret;
    }
}

if (!function_exists('RFW_borraTodoItem')) {
    function RFW_borraTodoItem($text, $etiq2)
    {
        extract($GLOBALS);
        //--localiza la etiqueta de apertura primera y borra hasta la etiqueta de cierre primera- Reiterativo'
        $txtEOF = false;
        while (!($txtEOF)) {

            $etiq = $etiq2;
            $text = RFW_BorraItem($text, $etiq);
            if (!$Response->IsClientConnected) {

                exit();
            }
        }
        $function_ret = $text;
        return $function_ret;
    }
}

if (!function_exists('RFW_extraer')) {
    function RFW_extraer($datos, $etiqueta)
    {
        extract($GLOBALS);
        //-- extrae los datos contenidos dentro de una etiqueta --'
        $ori = (strpos($datos, "<" . $etiqueta) ? strpos($datos, "<" . $etiqueta) + 1 : 0);
        if ($ori > 0) {

            $ori1 = (strpos($datos, ">", $ori) ? strpos($datos, ">", $ori) + 1 : 0);
            $fin = (strpos($datos, "</" . $etiqueta, $ori) ? strpos($datos, "</" . $etiqueta, $ori) + 1 : 0);
            if ($fin > 0) {
                $fin2 = (strpos($datos, ">", $fin) ? strpos($datos, ">", $fin) + 1 : 0);
                if ($fin2 == 0)
                    $fin2 = strlen($datos);
            } else
                $fin2 = strlen($datos);

            $function_ret = substr($datos, $ori1 + 1 - 1, $fin - $ori1 - 1);
            $dbg->mostrar("<br>" . RFW_verHTML($datos) . "/ori=" . $ori1 . "/fin=" . $fin);
            $dbg->mostrar("<br> etiq=" . $etiqueta . "=" . substr($datos, $ori1 + 1 - 1, $fin - $ori1 - 1));
        } else
            $function_ret = $datos;
        return $function_ret;
    }
}

if (!function_exists('RFW_BorraItem')) {

    function RFW_BorraItem($datos, $etiqueta)
    {
        // response.Write "<hr/>" '
        // response.Write RFW_verHTML(left(datos,50)) & "<br/>" '
        // response.write "<br/> busco item " & etiqueta & "->"'
        $txtEOF = true;
        $ori = strpos($datos, "<" . $etiqueta, 0);
        if ($ori > 0) {
            $fq = strpos($datos, ">", $ori);
            $fb = strpos($datos, " ", $ori);
            if ($fb > 0 && $fb < $fq) {
                $fq = $fb;
            }
            $etitemp = substr($datos, $ori, $fq - $ori - 1);
            //  response.Write " mid(datos," & ori+1 & "," & Instr(ori,datos,">") & "-" & ori & ")->" '
            //  response.write "&lt;" & RFW_verHTML(etitemp ) & "&gt;<br>"         '
            //  response.Write "/" & Instr(etitemp,"/") & "/"           '
            if (substr($etiqueta, -1) == ":") {
                $etiqueta = $etitemp;
            }
            if (substr($etitemp, -1) == "/") {
                //es etiqueta autocerrada'
                $_retval = RFW_borrar($datos, $etiqueta); // WARNING: assuming borrar is an external function
            } else {
                $fin = strpos($datos, "</" . $etiqueta, $ori);
                if ($fin > 0) {
                    $fin2 = strpos($datos, ">", $fin);
                    if ($fin2 == 0) {
                        $fin2 = strlen($datos);
                    }
                } else {
                    $fin2 = strlen($datos);
                }
                //   response.write "ori=" & ori & " fin2=" & fin2 & "&nbsp;"       '
                //   response.write " eliminado=" & RFW_verHTML(mid(datos,ori,fin2-ori+1))      '
                $_retval = substr($datos, 0, $ori - 1) . substr($datos, $fin2, strlen($datos));
                $txtEOF = false;
            }
        } else {
            $_retval = $datos;
        }
        // response.Write "<br/>"                  '
        return $_retval;
    }
}
if (!function_exists('RFW_borrar')) {
    function RFW_borrar($datos, $etiqueta)
    {
        //--------borra una etiqueta <etiqueta>----------------------'
        // response.Write "<hr/>"                  '
        fb(" busco " . $etiqueta . "-->");
        $txtEOF = true;
        if (strlen($etiqueta) > 0) {
            $ori = strpos($datos, "<" . $etiqueta);
            if ($ori > 0) {
                $txtEOF = false;
                $fin2 = strpos($datos, ">", $ori);
                if ($fin2 == 0) {
                    $fin2 = strlen($datos);
                }
                fb("ori=" . $ori . " fin2=" . $fin2 . "&nbsp;");
                $datos = substr($datos, 0, $ori - 1) . substr($datos, $fin2, strlen($datos));
            }
        }
        // response.Write "<br/>"'
        return $datos;
    }
}

if (!function_exists('RFW_montaOption')) {
    function RFW_montaOption($valor, $texto, $selected)
    {
        $salida = "<option value=\"" . $valor . "\" ";
        if ($selected) {
            $salida .= " selected ";
        }
        $salida .= ">" . $texto . "</option>";
        return $salida;
    }
}


if (!function_exists('RFW_cambiaHTML2TEXT')) {
    function RFW_cambiaHTML2TEXT($texto)
    {
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
}

if (!function_exists('RFW_pasa2Entities')) {
    function RFW_pasa2Entities($texto)
    {
        //     //convierte texto a entities HTML
        //     if (!(RFW_sivacio($texto))) {
        //         foreach (diccio() as $tipo) {
        //             $texto=str_replace(diccio[$tipo],$tipo,$texto); // WARNING: assuming RFW_sivacio is an external array assuming diccio is an external function assuming diccio is an external array
        //         }
        //     }
        return $texto;
    }
}

if (!function_exists('RFW_pon')) {
    function RFW_pon($texto, $html)
    {
        //     //  response.write html & ">" & texto & "|"'
        //     diccio->add($html, $texto); // WARNING: assuming diccio is an external function
    }
}
if (!function_exists('RFW_quitaParrafo')) {
    function RFW_quitaParrafo($salida)
    {

        if (RFW_sivacio($salida)) {
            $_retval = ""; // WARNING: assuming sivacio is an external array
        } else {
            $_retval = str_replace("<p>", "", str_replace("</p>", "<br/>", $salida));
        }
        return $_retval;
    }
}
if (!function_exists('RFW_borrarParrafo')) {
    function RFW_borrarParrafo($salida)
    {
        if (RFW_sivacio($salida)) {
            $_retval = $salida; // WARNING: assuming sivacio is an external array
        } else {
            $_retval = RFW_borraEtiqueta(RFW_borraEtiqueta($salida, "p"), "/p"); // WARNING: assuming RFW_borraEtiqueta is an external function assuming RFW_borraEtiqueta is an external function
        }
        return $_retval;
    }
}
if (!function_exists('RFW_presentaElemento')) {
    function RFW_presentaElemento($etiqueta, $clase, $valor)
    {
        $GLOBALS['UltimaEtiqueta'] = $etiqueta;
        $out = RFW_presentaEtiqueta($etiqueta, $clase);
        $out .= $valor;
        $out .= RFW_cierraEtiqueta($GLOBALS['UltimaEtiqueta']);
        return $out;
    }
}
if (!function_exists('RFW_presentaEtiqueta')) {
    function RFW_presentaEtiqueta($etiqueta, $clase)
    {
        $id = "";
        $tmp = substr($clase, 0, 1);
        if (($tmp == "#")) {
            $id = substr($clase, 1, 99);
            $clase = "";
        }
        if (($etiqueta != "")) {
            $out = "<" . $etiqueta;
        }
        if (($clase != "")) {
            if (($etiqueta == "")) {
                $out = "<span ";
                $GLOBALS['UltimaEtiqueta'] = "span";
            }
            $out .= " class=\"" . $clase . "\"";
        }
        if (($id != "")) {
            if (($etiqueta == "")) {
                $out = "<span ";
                $GLOBALS['UltimaEtiqueta'] = "span";
            }
            $out .= " id=\"" . $id . "\"";
        }
        if (($out != "")) {
            $out .= ">";
        }
        return $out;
    }
}
if (!function_exists('RFW_cierraEtiqueta')) {
    function RFW_cierraEtiqueta($etiqueta)
    {
        if (($etiqueta != "")) {
            $_retval = "</" . $etiqueta . ">";
        }
        return $_retval;
    }
}
if (!function_exists('RFW_etiquetaSiLleno')) {
    function RFW_etiquetaSiLleno($etiqueta, $contenido)
    {
        $out = "";
        if ($contenido != "") {
            $out .= RFW_montaEtiqueta($etiqueta, "", $contenido) . "\r\n";
        }
        return $out;
    }
}
if (!function_exists('RFW_etiquetaCDATASiLleno')) {
    function RFW_etiquetaCDATASiLleno($etiqueta, $contenido)
    {
        $out = "";
        if ($contenido != "") {
            $out .= RFW_montaEtiqueta($etiqueta, "", "<![CDATA[" . $contenido . "]]>") . "\r\n";
        }
        return $out;
    }
}
if (!function_exists('RFW_creaEntradilla')) {
    function RFW_creaEntradilla($texto, $maximo = 0)
    {
        if ($texto != null) {
            $pos = stripos($texto, '<!--more-->');
            if ($pos === false) {
                if ($maximo != 0) {
                    $texto = strip_tags($texto);     //borro todos los tag 
                    $longitud = strlen($texto);
                    if ($maximo > $longitud) $maximo = $longitud;
                    if ($maximo < 11) return $texto;
                    $pos = $maximo;

                    $pos = stripos($texto, ' ', $maximo - 10);  //busco el primer blanco desde 10 posiciones antes de fin
                    return substr($texto, 0, $pos) . "...";
                }
                return $texto;
            } else
                return substr($texto, 0, $pos);
        } else {
            return '';
        }
    }
}
// -----------------------------------------
// URL decode to retrieve the original value
if (!function_exists('RFW_limpia')) {
    function RFW_limpia($texto)
    {
        $texto = preg_replace("#\s{2,}|&nbsp;#", "", $texto);
        // $texto=trim(html_entity_decode(strip_tags($texto)));
        $texto = str_replace('<', '"', $texto);
        $texto = str_replace('>', '"', $texto);
        return $texto;
    }
}
// url maker function, remove duplicated vars

// exemple
// RFW_makeUrl('index.php', $_SERVER['QUERY_STRING'], 'name=value&name2=value2');
if (!function_exists('RFW_makeUrl')) {
    function RFW_makeUrl($path, $qs = false, $qsAdd = false)
    {
        $var_array = array();
        $varAdd_array = array();
        $url = $path;

        if ($qsAdd) {
            $varAdd = explode('&', $qsAdd);
            foreach ($varAdd as $varOne) {
                $name_value = explode('=', $varOne);

                $varAdd_array[$name_value[0]] = $name_value[1];
            }
        }

        if ($qs) {
            $var = explode('&', $qs);
            foreach ($var as $varOne) {
                $name_value = explode('=', $varOne);

                //remove duplicated vars
                if ($qsAdd) {
                    if (!array_key_exists($name_value[0], $varAdd_array)) {
                        $var_array[$name_value[0]] = $name_value[1];
                    }
                } else {
                    $var_array[$name_value[0]] = $name_value[1];
                }
            }
        }

        //make url with querystring
        $delimiter = "?";

        foreach ($var_array as $key => $value) {
            $url .= $delimiter . $key . "=" . $value;
            $delimiter = "&";
        }

        foreach ($varAdd_array as $key => $value) {
            $url .= $delimiter . $key . "=" . $value;
            $delimiter = "&";
        }

        return $url;
    }
}
if (!function_exists('RFW_normalizaURL')) {
    function RFW_normalizaURL($direccion = "")
    {
        if ($direccion != "") {
            if (strtolower(substr($direccion, 0, 4)) != "http")
                return "http://" . $direccion;
            else {
                return $direccion;
            }
        }
        return "";
    }
}
if (!function_exists('RFW_salidaEmergente')) {
    function RFW_salidaEmergente($direccion, $tiempoCierre = 0)
    {
        $salida = "";
        $salida .= "<a id='anclaAutomatica' href='$direccion' title=''></a>";

        $rutina = "
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
        if ($tiempoCierre > 0) {
            $rutina .= "'onComplete': function(){
				    setTimeout( function() {\$.fancybox.close(); },$tiempoCierre*1000); // 5000 = 5 secs
				  }";
        };
        $rutina .= "
		});

		\$('#anclaAutomatica').eq(0).trigger('click');
    });	";

        //	Yii::app()->clientScript->registerScript('emergenteAutomatico',$rutina,CClientScript::POS_READY);
        $salida .= "<script>" . $rutina . "</script>";
        return $salida;
    }
}
if (!function_exists('RFW_sivacio')) {
    function RFW_sivacio($var)
    {
        if (isset($var) && $var != "") {
            return false;
        }
        return true;
    }
}
if (!function_exists('RFW_console_log')) {
    function RFW_console_log($data, $add_script_tags = false)
    {
        $command = 'console.log(' . json_encode($data, JSON_HEX_TAG) . ');';
        //$command = 'console.log(' . esc_html($data) . ');';

        if ($add_script_tags) {
            $command = '<script>' . $command . '</script>';
        }
        echo $command;
    }
}

// $diccio is of type "Scripting.Dictionary"
RFW_pon("\"", "&quot;");
RFW_pon("&", "&amp;");
RFW_pon("<", "&lt;");
RFW_pon(">", "&gt;");
RFW_pon("€", "&euro;");
RFW_pon(" ", "&nbsp;");
RFW_pon("Á", "&Aacute;");
RFW_pon("á", "&aacute;");
RFW_pon("Â", "&Acirc;");
RFW_pon("â", "&acirc;");
RFW_pon("´", "&acute;");
RFW_pon("À", "&Agrave;");
RFW_pon("à", "&agrave;");
RFW_pon("Ä", "&Auml;");
RFW_pon("ä", "&auml;");
RFW_pon("|", "&brvbar;");
RFW_pon("Ç", "&Ccedil;");
RFW_pon("ç", "&ccedil;");
//	pon "^","&ccedil;" '
RFW_pon("®", "&copy;");
RFW_pon("É", "&Eacute;");
RFW_pon("é", "&eacute;");
RFW_pon("Ê", "&Ecirc;");
RFW_pon("ê", "&ecirc;");
RFW_pon("È", "&Egrave;");
RFW_pon("è", "&egrave;");
RFW_pon("Ë", "&Euml;");
RFW_pon("ë", "&euml;");
RFW_pon("Í", "&Iacute;");
RFW_pon("í", "&iacute;");
RFW_pon("Î", "&Icirc;");
RFW_pon("î", "&icirc;");
RFW_pon("¡", "&iexcl;");
RFW_pon("Ì", "&Igrave;");
RFW_pon("ì", "&igrave;");
RFW_pon("Ï", "&Iuml;");
RFW_pon("ï", "&iuml;");
RFW_pon("¿", "&iquest;");
RFW_pon("Ñ", "&Ntilde;");
RFW_pon("ñ", "&ntilde;");
RFW_pon("Ó", "&Oacute;");
RFW_pon("ó", "&oacute;");
RFW_pon("Ô", "&Ocirc;");
RFW_pon("ô", "&ocirc;");
RFW_pon("ª", "&ordf;");
RFW_pon("º", "&ordm;");
RFW_pon("Ò", "&Ograve;");
RFW_pon("ò", "&ograve;");
RFW_pon("Ö", "&Ouml;");
RFW_pon("ö", "&ouml;");
RFW_pon("~", "&tilde;");
RFW_pon("Ú", "&Uacute;");
RFW_pon("ú", "&uacute;");
RFW_pon("Û", "&Ucirc;");
RFW_pon("û", "&ucirc;");
RFW_pon("Ù", "&Ugrave;");
RFW_pon("ù", "&ugrave;");
RFW_pon("Ü", "&Uuml;");
RFW_pon("ü", "&uuml;");
RFW_pon("·", "&middot;");
RFW_pon("Œ", "&OElig;");
RFW_pon("œ", "&oelig;");
RFW_pon("Ÿ", "&#376;");
RFW_pon("ÿ", "&yuml;");
