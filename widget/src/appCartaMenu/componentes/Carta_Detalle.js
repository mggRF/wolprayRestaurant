import {Component} from 'react';


export default class CartaDetalle extends Component{
    constructor(props){
        super(props);
        this.cambiarVista = props.cambiarVista;
    }
    render(){
        return(
            <div>
                Carta detalle
            </div>
        );
    }
}