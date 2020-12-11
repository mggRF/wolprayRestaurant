import {Component} from 'react';
import Pedido from './Pedido.js';

export default class Pedidos extends Component{

    render(){
        return(
            <div>
                { this.props.ordenMenu && this.props.ordenMenu.length ? 
                    this.props.ordenMenu.map((pedido, index) => 
                        <Pedido 
                            pedido={pedido} 
                            editarPedido={this.props.editarPedido} 
                            eliminarMenu={this.props.eliminarMenu} 
                            index={index}
                            key={index}
                        />
                    ) 
                    : 
                    <div className="divPedido"> - - - No hay nada solicitado - - -</div>
                }
            </div>
        );
    }
}