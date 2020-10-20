<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TH8DG2V');
    </script>
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $cabeTitulo; ?></title>
    <link rel="stylesheet" href="/PHP_Externo/css/estilo.css" />
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css">
    <link crossorigin="anonymous" rel='stylesheet' id='google-fonts-css' href='//fonts.googleapis.com/css?family=Roboto%3A400&#038;display=fallback&#038;ver=2.5.5' media='all' />
    <link crossorigin="anonymous" rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CArchivo%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRubik%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CYellowtail%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CWork+Sans%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CYeseva+One%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CNunito%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;ver=5.5.1' media='all' />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TH8DG2V" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <header>
        <div class="container-header">
            <div class="logo-title">
                <img src="../images/multitinta-negre-logo.png" alt="wolpray" />
            </div>
            <nav role="navigation" class="">
                <ul id="menu-1" class="">
                    <li class="menu-item">
                        <a href="http://wolpray.es/listas-wolpray/" class="menu-link">Listas</a>
                    </li>
                    <li class="menu-item">
                        <a href="http://wolpray.es/fiesta-mayor/" class="menu-link ">Fiesta Mayor</a>
                    </li>
                    <li class="menu-item ">
                        <a href="http://wolpray.es/soy-empresa/" class="menu-link ">Soy empresa</a>
                    </li>
                </ul>
            </nav>
            <label class="icon-menu">
                <img src="../icon/menu.png" alt="">
            </label>

        </div>

    </header>
    <div id="page" class="fase0">
        <?php include DIR_ROOT . '/vistas/' . $tpl ?>
    </div>
    <footer>
        <div class="container-footer">
            <div class="fase3">
                <div class="comentarios">
                    <h3>Que dice la gente</h3>
                    <h2 class="estiloTexto">Testimonios</h2>
                    <div class="testimonios"></div>
                </div>
            </div>

        </div>


        <div class="parallax">
            <div class="container-datax">
                <div class="container-data-footer"></div>
            </div>

            <div class="mensaje_publi">
                <h2 class="estiloTexto">¡Comparte el evento con los tuyos</h2>
            </div>
            <div class="barraBotones fijos">

                <div class="botonesRedes">
                    <span class="btn_icon">
                        <i class="fas fa-facebook"></i>
                        <span class="en_pantalla">Share on facebook</span>
                    </span>
                    <div class="btn_text">
                        <span class="btn_title">
                            Facebook </span>
                    </div>
                </div>

                <div class="botonesRedes">
                    <span class="btn_icon">
                        <i class="fab fa-whatsapp" aria-hidden="true"></i>
                        <span class="en_pantalla">Share on whatsapp</span>
                    </span>
                    <div class="btn_text">
                        <span class="btn_title">
                            WhatsApp </span>
                    </div>
                </div>

                <div class="botonesRedes">
                    <span class="btn_icon">
                        <i class="fab fa-telegram" aria-hidden="true"></i>
                        <span class="en_pantalla">Share on telegram</span>
                    </span>
                    <div class="btn_text">
                        <span class="btn_title">
                            Telegram </span>
                    </div>

                </div>
            </div>

            <div class="shape shape-bottom" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="shape-fill-footer" d="M0,6V0h1000v100L0,6z"></path>

                </svg>
            </div>
        </div>

        <div class="fase4 barraBotones">
            <div class="columna">
                <div class="columna-container">
                    <h3 class="tituloCol">
                        Sobre nosotros
                    </h3>

                    <div class="columna-datos">
                        <p>El futuro de la fiesta está en tus manos, solo descarga la app&nbsp; y empieza a demostrar tu lado más rebelde al mundo con Wolpray. El buscador de fiestas nº1</p>
                    </div>
                </div>
            </div>
            <div class="columna">
                <div class="columna-container">
                    <h3 class="tituloCol">Pages</h3>
                    <div class="columna-datos">
                        <span class="icon-list-icon">
                            <i aria-hidden="true" class="fas fa-angle-right"></i> </span>
                        <span class="icon-list-text">WolpList VIP FREE</span>
                        </li>
                        <li class="icon-list-item">
                            <span class="icon-list-icon">
                                <i aria-hidden="true" class="fas fa-angle-right"></i> </span>
                            <span class="icon-list-text">Reservar Mesas</span>
                        </li>
                        <li class="icon-list-item">
                            <span class="icon-list-icon">
                                <i aria-hidden="true" class="fas fa-angle-right"></i> </span>
                            <span class="icon-list-text">Soy empresa</span>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="columna">
                <div class="columna-container">
                    <h3 class="tituloCol">Help</h3>
                    <div class="columna-datos">
                        <ul class="list-items">
                            <li class="icon-list-item">
                                <span class=-icon-list-icon">
                                    <i aria-hidden="true" class="fas fa-angle-right"></i> </span>
                                <span class="icon-list-text">Términos y condiciones</span>
                            </li>
                            <li class="icon-list-item">
                                <span class="icon-list-icon">
                                    <i aria-hidden="true" class="fas fa-angle-right"></i> </span>
                                <span class="icon-list-text">Políticas de privacidad</span>
                            </li>
                            <li class=-icon-list-item">
                                <span class="icon-list-icon">
                                    <i aria-hidden="true" class="fas fa-angle-right"></i> </span>
                                <span class="icon-list-text">Políticas de cookies</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="columna">
                <div class="columna-container">
                    <h3 class="tituloCol">Social Media</h3>
                    <div class="columna-datos">
                        <div class="grid-item">
                            <a class="icon" target="_blank">
                                <span class="screen-only">Facebook-f</span>
                                <i class="fab fa-facebook-f"></i> </a>
                        </div>
                        <div class="grid-item">
                            <a class="icon" target="_blank">
                                <span class="screen-only">Twitter</span>
                                <i class="fab fa-twitter"></i> </a>
                        </div>
                        <div class="grid-item">
                            <a class="icon" target="_blank">
                                <span class="screen-only">Instagram</span>
                                <i class="fab fa-instagram"></i> </a>
                        </div>
                        <div class="grid-item">
                            <a class="icon" target="_blank">
                                <span class="screen-only">Youtube</span>
                                <i class="fab fa-youtube"></i> </a>
                        </div>
                        <div class="elementor-grid-item">
                            <a class="icon" target="_blank">
                                <span class="screen-only">Envelope</span>
                                <i class="fas fa-envelope"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>