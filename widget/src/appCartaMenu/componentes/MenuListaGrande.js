import { Component } from 'react';

import { VISTAS } from '../Constantes/Constantes.js';
import Estilos from './MenuCarta.module.css'
export default class MenuListaGrande extends Component {
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
            <div className={Estilos.textCenter}>
                
                <div className={Estilos.botonera}>
                    <button className={Estilos.boton} onClick={e => this.props.cambiarVista(VISTAS.RESUMEN.CMD)}>Cancelar</button>

                </div>


                <div className={Estilos.contenedor} style={{ display: 'flex' }}>
                    {this.props.menu.Datos.map((menu, index) =>
                        <div key={index} className={Estilos.menu} style={{ float: 'left' }} onClick={e => this.seleccionarMenu(menu)}>
                            <div className={Estilos.cabeceraMenu}>
                                <h3>Menú</h3>
                                {/* <h6>{menu.descripcion}</h6> */}
                            </div>
                            <div className={Estilos.cuerpoMenu}>
                                <div className={Estilos.precio}>{menu.precio}</div>

                                {menu.menu.map((tipoGrupo, index) =>
                                    <div key={index} className={Estilos.grupo}>
                                        <div className={Estilos.titGrupo}>{tipoGrupo.grupName}</div>
                                        {tipoGrupo.plato.map((plato, index2) =>
                                            <div key={index2} className={Estilos.plato}>
                                                {plato.name}
                                            </div>
                                        )}
                                    </div>
                                )}


                                <div key="3" className={Estilos.comentario}>{this.props.menu.detalles}</div>
                            </div>
                        </div>
                    )}
                </div>



            </div>
        );
    }
}