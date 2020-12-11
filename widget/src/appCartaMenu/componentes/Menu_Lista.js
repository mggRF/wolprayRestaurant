import { Component } from 'react';

//import swal from 'sweetalert';
import { VISTAS } from '../Constantes/Constantes';
import Estilos from './MenuCarta.module.css'
export default class MenuLista extends Component {
    constructor(props) {
        super(props);
        if (this.props.menu.Datos.length === 1) {
            this.seleccionarMenu(this.props.menu.Datos[0]);
            this.props.cambiarVista(VISTAS.MEN_DET.CMD);
        }
    }
    seleccionarMenu = menu => {
        this.props.cambiarMenuSeleccionado(menu);
        this.props.cambiarVista(VISTAS.MEN_DET.CMD);
    }
    render() {
        return (
            <div className={Estilos.text_center}>
                <div className={Estilos.botonera}>
                    <button className={Estilos.boton} onClick={e => this.props.cambiarVista(VISTAS.RESUMEN.CMD)}>Cancelar</button>
                   
                </div>
                <div className={Estilos.text_center}>
                    {this.props.menu.Datos.map((menu, index) =>

                        <div key={index} className={Estilos.menu} onClick={e => this.seleccionarMenu(menu)}>
                            <div className={Estilos.cabeceraMenu}>
                                {menu.descripcion}
                            </div>
                            <div className={Estilos.cuerpoMenu}>
                                <div className={Estilos.precio}>
                                    {menu.precio}
                                </div>
                            </div>
                            <div className={Estilos.comentario}>
                                {menu.detalles}
                            </div>
                        </div>

                    )
                    }
                </div>
                <div className={Estilos.botonera}>
                    <button className="boton" onClick={e => this.props.cambiarVista(VISTAS.RESUMEN.CMD)}>Cancelar</button>

                </div >
            </div>
        );
    }
}