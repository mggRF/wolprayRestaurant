import {Component} from 'react';
import { VISTAS } from '../Constantes/Constantes';
import Estilos from './MenuCarta.module.css'
export default class Botonera extends Component{
    
    render(){
        return(
            <div className="text-center">
                <button
                    className={Estilos.boton}
                    onClick={e => this.props.cambiarVista(VISTAS.MEN_LISTA.CMD)}>{VISTAS.MEN_LISTA.TXT}
                </button>
                <button
                    className={Estilos.boton}
                    onClick={e => this.props.cambiarVista(VISTAS.CAR_DET.CMD)}>{VISTAS.CAR_DET.TXT}
                </button>
                <button
                    className={Estilos.boton}

                    onClick={e => this.props.cambiarVista(VISTAS.COMPRA.CMD)}>{VISTAS.COMPRA.TXT}
                </button>
                <button
                    className={Estilos.boton}

                    onClick={e => this.props.cancelar()}>Cancelar
                </button>
            </div>
        );
    }
}