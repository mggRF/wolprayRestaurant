import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Estilos from './MenuCarta.module.css';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
export default class Pedido extends Component {
    menuCarta(control) {
        if (control && control.length > 0) {
            return '-*  Menú para';
        } else {
            return '-* Carta  para '
        }
    }
    render() {

        return (
            <div className={Estilos.divPedido}>
                <div className={Estilos.textCenter}>
                    <label className={Estilos.lineaPedido}>
                        {this.menuCarta(this.props.pedido.pedido)}
                        {this.props.pedido.receptor} ...&nbsp;{this.props.pedido.precio}&euro;&nbsp;&nbsp;
                        <span 
                            className="iconAccion"
                            onClick={e => this.props.editarPedido(this.props.pedido, this.props.index)}>
                            <FontAwesomeIcon icon={faEdit} />

                        </span>
                        <span
                            className="iconAccion fa fa-trash"
                            onClick={e => this.props.eliminarMenu(this.props.index)}
                        >
                        <FontAwesomeIcon icon={faTrash} />

                        </span>
                    </label>
                </div>

            </div>
        );
    }
}