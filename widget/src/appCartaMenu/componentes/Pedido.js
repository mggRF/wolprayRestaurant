import { Component } from 'react';
import Estilos from './MenuCarta.module.css';
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
                        <span className="iconAccion fa fa-edit"
                            onClick={e => this.props.editarPedido(this.props.pedido, this.props.index)}>
                        </span>
                        <span
                            className="iconAccion fa fa-trash"
                            onClick={e => this.props.eliminarMenu(this.props.index)}
                        >
                        </span>
                    </label>
                </div>

            </div>
        );
    }
}