import { Component } from 'react';

import { css } from './css/css.Menu_Detalle.js';
import { VISTAS } from '../Constantes/Constantes.js';

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
            <div className="text-center">
                <style>
                    {css}
                </style>
                <button className="boton" onClick={e => this.abandonar(VISTAS.RESUMEN.CMD)}>Cancelar</button>
                
                

                <div className="contenedor" style={{display:'flex'}}>
                    {this.props.menu.Datos.map((menu, index) =>
                        <div key={index} className="pointer menu mt-5" style={{float:'left'}} onClick={e => this.seleccionarMenu(menu)}>
                            <div className="cabeceraMenu">
                                <h3>Menú</h3>
                                {/* <h6>{menu.descripcion}</h6> */}
                            </div>
                            <div className="cuerpoMenu">
                                <div className="precio">{menu.precio}</div>

                                {menu.menu.map((tipoGrupo, index) =>
                                    <div key={index} className="grupo">
                                        <div className="titGrupo">{tipoGrupo.grupName}</div>
                                        {tipoGrupo.plato.map((plato, index2) =>
                                            <div key={index2} className="plato">
                                                {plato.name}
                                            </div>
                                        )}
                                    </div>
                                )}


                                <div key="3" className="comentario">{this.props.menu.detalles}</div>
                            </div>
                        </div>
                    )}
                </div>



            </div>
        );
    }
}