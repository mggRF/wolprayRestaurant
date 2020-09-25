<div class="parallax">
        <div class="container-data">
            <div class="nombre-discoteca">
                <h1>[[[club]]]</h1>
            </div>
        </div>
    </div>
    <div class="container-datos">

        <div class="divsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                <path class="shape-fill" d="M0 0L2600 0 2600 69.1 0 0z" />
                <path class="shape-fill" style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z" />
                <path class="shape-fill" style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z" />
            </svg>
        </div>


        <div class="container-datos-club">
            <div class="cdc-imagen">
                <img src="images/xandro-vandewalle-454419-unsplash.jpg" alt="Wolpray" />
            </div>
            <div class="cdc-datos">
                <div class="cdc-datos-titulo">
                    <h2>Sobre el club</h2>
                </div>
                <div class="cdc-datos-musica">
                    <p>[[[musica]]]</p>
                </div>
                <div class="cdc-datos-descripcion">
                    <p>[[[descripcion]]]</p>
                </div>
                <div class="cdc-datos-acordeon">
                    <button class="accordion">Vestimenta</button>
                    <div class="panel">
                        <p>[[[vestimenta]]]]]]</p>
                    </div>

                    <button class="accordion">Edad mínima</button>
                    <div class="panel">
                        <p>[[[edadMinima]]]</p>
                    </div>

                    <button class="accordion">Horarios</button>
                    <div class="panel">
                        <p>[[[Horarios]]]</p>
                    </div>
                    <button class="accordion">Restricciones de COVID-19</button>
                    <div class="panel">
                        <p>[[[COVID-19
                            <]]]< /p>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <div class="listas-gratuitas">
        <div class="lg-titulo">
            <h3>Listas gratuitas</h3>
        </div>
        <div class="lg-listaClubs">
            <div class="lglc-linea">
                <div class="lglc-columna">
                    [[[tituloEvento]]]
                </div>
                <div class="lglc-columna">
                    [[[direccionEvento]]]
                </div>
                <div class="lglc-columna">
                    [[[Apuntate]]]
                </div>
            </div>
        </div>

    </div>
    <div class="fase2">


        <div class="parallax1">
            <div class="contenedor">
                <div class="topsvg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <defs>
                            <clipPath id=”wave” clipPathUnits=”objectBoundingBox”></clipPath>
                            <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" />
                        </defs>
                    </svg>
                </div>

                <div class="bottomsvg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
                    </svg>
                </div>
            </div>
        </div>

    </div>
    
<script>
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
</script>