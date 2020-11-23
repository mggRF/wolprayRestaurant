import { Component } from 'react';

import ListaGrupo from './Entrada/ListaGrupo';
import swal from 'sweetalert';
import { VISTAS } from '../../Constantes/Constantes';
import './style.css';

export default class Carta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtotal: 0,
            pedido: props.pedido,
            carta: props.carta       //carta de este pedido
        }
    }

    subtotal = form => {
        let productos = Array.from(form.children[0].children);
        productos = productos.map(e => [...e.children]).flat();
        productos = productos.map(e => [...e.children]).flat();
        productos = productos.filter(e => e.className === "quantityPlato floatRight" && e.value > 0);
        let carta = {};
        productos.map(e => carta[e.dataset.idplato] = e.value);
        this.setState({
            subtotal: productos.reduce((acc, e) => acc + e.dataset.precio * e.value, 0),
            pedido: carta
        });
        this.props.setCarta(this.state.productos);
    }
    abandonar = accion => {
        if (accion === 'Cancelar') {
            this.cambiarVista('Resumen');
        }
        if (accion === 'Compra' && document.querySelector('input:checked') !== null) {
            this.cambiarVista('Compra');
        }
        else if (accion === 'Compra') {
            swal({
                text: "Acción prohibida",
                title: "Debe seleccionar algún producto para poder ir a compra",
                icon: 'error',
                button: 'Entiendo'
            })
        }
    }
    render() {
        let datos = this.props.carta;
console.log(this.props.carta)
        return (
            <div>
                <div className="text-center">
                    <button className="boton" onClick={e => this.abandonar('Cancelar')}>
                        Cancelar
                    </button>
                    <button className="boton" onClick={e => this.abandonar(VISTAS.COMPRA.CMD)}>
                        {VISTAS.COMPRA.TXT}
                    </button>
                    <button className="boton" onClick={this.pedir} type="button" >
                        {VISTAS.RESUMEN.TXT}
                    </button>
                </div>

                <form action="">
                    <div className="wrap_products">
                        <div className="subtotal">
                            <b>Subtotal: {this.state.subtotal} &euro;</b>
                        </div>
                        {datos.map((grupo, i) =>
                            <ListaGrupo
                                key={i}
                                setCarta={this.props.setCarta}
                                grupo={grupo}
                                subtotal={this.subtotal}
                                pedido={this.state.pedido}
                            />
                        )}
                    </div>
                </form>
            </div>
        )
    }
}