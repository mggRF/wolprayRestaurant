<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $cabeTitulo; ?></title>
    <link rel="stylesheet" href="css/estilo.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <header>
        <div class="container-header">
            <div class="logo-title">
                <img src="images/multitinta-negre-logo.png" alt="wolpray" />
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
                <img src="icon/menu.png" alt="">
            </label>

        </div>

    </header>
    <div id="page">
        <?php include DIR_ROOT . '/vistas/' . $tpl ?>
    </div>
    </div>
    <div class="fase3">
        <div class="comentarios">
            <h3>Que dice la gente</h3>
            <h2>Testimonios</h2>
        </div>
    </div>
</body>
</html>