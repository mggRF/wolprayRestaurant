import {Component} from 'react';
import Pedido from './Pedido.js';

export default class Pedidos extends Component{
    
    render(){
        return(
            <div>
                { this.props.menu.length ? 
                    this.props.menu.map((pedido, index) => 
                        <Pedido 
                            pedido={pedido} 
                            editarPedido={this.editarPedido} 
                            eliminarMenu={this.props.eliminarMenu} 
                            index={index} />
                    ) 
                    : 
                    <div className="divPedido"> - - - No hay nada solicitado - - -</div>
                }
            </div>
        );
    }
}