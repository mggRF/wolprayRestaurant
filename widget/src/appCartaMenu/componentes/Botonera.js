import {Component} from 'react';
import { VISTAS } from '../Constantes/Constantes';

export default class Botonera extends Component{
    
    render(){
        return(
            <div className="text-center">
                <button
                    className="boton" 
                    onClick={e => this.props.cambiarVista(VISTAS.MEN_LISTA.CMD)}>{VISTAS.MEN_LISTA.TXT}
                </button>
                <button
                    className="boton" 
                    onClick={e => this.props.cambiarVista(VISTAS.CAR_DET.CMD)}>{VISTAS.CAR_DET.TXT}
                </button>
                <button
                    className="boton" 
                    onClick={e => this.props.cambiarVista(VISTAS.COMPRA.CMD)}>{VISTAS.COMPRA.TXT}
                </button>
                <button
                    className="boton" 
                    onClick={e => this.props.cancelar()}>Cancelar
                </button>
            </div>
        );
    }
}