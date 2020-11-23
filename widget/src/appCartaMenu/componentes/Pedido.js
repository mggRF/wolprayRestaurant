import {Component} from 'react';

export default class Pedido extends Component{
    constructor(props){
        super(props);
        this.eliminarMenu = this.props.eliminarMenu;
        this.editarPedido = this.props.editarPedido;
    }
    render(){
        return(
            <div className="divPedido">
                <div className="containerPedido">
                    <label>
                        -* Menú para {this.props.pedido.receptor} ...{this.props.pedido.precio}&euro;  
                        {/* <span className="iconAccion fa fa-edit" onClick={e => this.editarPedido(this.props.pedido)}></span> */}
                        <span 
                            className="iconAccion fa fa-trash" 
                            onClick={e => this.eliminarMenu(this.props.index)}
                        >
                        </span>
                    </label>
                </div>
                
            </div>
        );
    }
}