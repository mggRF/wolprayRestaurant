import { Component } from 'react';

//import swal from 'sweetalert';
import { VISTAS } from '../Constantes/Constantes';

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
            <div className="text-center">
                <button className="boton" onClick={e => this.props.cambiarVista(VISTAS.RESUMEN.CMD)}>Cancelar</button>
                <button className="boton" onClick={e => this.props.cambiarVista(VISTAS.COMPRA.CMD)}>{VISTAS.COMPRA.TXT}</button>
                {this.props.menu.Datos.map((menu, index) =>
                    <div key={index} className="pointer menu mt-5" onClick={e => this.seleccionarMenu(menu)}>
                        <div className="cabeceraMenu">
                            {menu.descripcion}
                        </div>
                        <div className="cuerpoMenu">
                            <div className="precio">
                                {menu.precio}
                            </div>
                        </div>
                        <div className="comentario">
                            {menu.detalles}
                        </div>
                    </div>
                )}
                <button className="boton" onClick={e => this.props.cambiarVista(VISTAS.RESUMEN.CMD)}>Cancelar</button>
                <button className="boton" onClick={e => this.props.cambiarVista(VISTAS.COMPRA.CMD)}>VISTAS.COMPRA.TXT</button>
            </div>
        );
    }
}