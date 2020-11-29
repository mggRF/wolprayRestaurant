export const css = `
.contenedor {
    text-align: center;
}
.ancho{
    width: 20%;
    min-width: 20em;
}
.box{
    border: 1px solid #000;
    border-radius: 4px 4px 4px 4px;
}
.menu {
    composer from .ancho
    composer from .box
    text-align: center;
    display: block;
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
}
.botonera{
    composer from .ancho
}

.cabeceraMenu {
    background-color: #777777;
    padding: 20px 24px 20px 24px;
    color: #ffffff;
    font-family: "Roboto", Sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1em;
    letter-spacing: 0.5px;
}

.cuerpoMenu {}

.precio {
    background-color: #ffffff;
    padding: 36px 32px 20px 32px;
    font-family: "Roboto", Sans-serif;
    font-size: 3.75rem;
    font-weight: 500;
    letter-spacing: -1.5px;
}

.precio:after {
    content: '€';
}

.grupo {
    margin-top: 20px;
}

.titGrupo {
    margin: 15px 15px 10px 15px;
    font-family: "Roboto", Sans-serif;
    font-size: 1.1em;
    font-weight: 600;
    line-height: 1.4em;
    text-transform: uppercase
}

.plato {
    margin-left: 15px;
    margin-right: 15px;
    font-family: "Roboto", Sans-serif;
    font-weight: 400;
    line-height: 1.6em;
    font-size: 1.1em;
}

.boton {
    margin: 15px auto;
    padding: 15px 30px;
    color: #ffffff;
    font-family: "Roboto", Sans-serif;
    font-size: 1em;
    background-color: #cc9955;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #cc9955;
    border-radius: 24px 24px 24px 24px;
}

.comentario {
    margin-left: 15px;
    margin-right: 15px;
    font-family: "Roboto", Sans-serif;
    font-weight: 400;
    line-height: 1.6em;
    font-size: 1.1em;
}
`;