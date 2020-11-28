import { Component } from 'react';

import ListaGrupo from './Entrada/ListaGrupo';
import swal from 'sweetalert';
import { VISTAS } from '../../Constantes/Constantes';
import Estilos from '../MenuCarta.module.css';
import {objetoIgual} from  '../../../Funciones/funcionesArray.js';

export default class Carta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtotal: 0,
            carta: props.carta       //carta de este pedido
        }
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleCantidad = this.handleCantidad.bind(this);
        this.handleSubtotal = this.handleSubtotal.bind(this);
        this.pedir = this.pedir.bind(this);
    }
    componentDidUpdate(nxprop, actprop) {
        
        if (!objetoIgual(nxprop.carta,actprop.carta)) {
            this.setState({
                subtotal: 0,
                carta: this.props.carta       //carta de este pedido
            })
            this.handleSubtotal(this.props.carta);
        }
    }
    abandonar = accion => {
        if (accion === VISTAS.CANCELAR.CMD) {
            this.props.cambiarVista(VISTAS.RESUMEN.CMD);
        }
        if (accion === VISTAS.COMPRA.CMD && document.querySelector('input:checked') !== null) {
            this.props.cambiarVista(VISTAS.COMPRA.CMD);
        }
        else if (accion === VISTAS.COMPRA.CMD) {
            swal({
                text: "Acción prohibida",
                title: "Debe seleccionar algún producto para poder ir a compra",
                icon: 'error',
                button: 'Entiendo'
            })
        }
    }
    /**
     * recibe grupo y plato, e invierte el valor de la casilla
     * @param {*} e 
     * @param {*} grupo 
     * @param {*} plato 
     */
    handleCheckbox(e, grupo, plato) {
        let carta = this.state.carta
        
        for (let a = 0; a < carta.length; a++) {
            if (carta[a].idGrupo === grupo) {
                let platos = carta[a].plato
                for (let b = 0; b < platos.length; b++) {
                    if (platos[b].idPlato === plato) {
                        carta[a].plato[b].pedido = !carta[a].plato[b].pedido;
                        if (carta[a].plato[b].pedido && carta[a].plato[b].cantidad  === 0) {
                            carta[a].plato[b].cantidad = 1;
                        }
                        this.setState({ carta: carta });
                        this.handleSubtotal(carta)
                        return;
                    }
                }
            }
        }
    }

    handleCantidad(e, grupo, plato) {
        let valor = e.target.value;
        let carta = this.state.carta
        for (let a = 0; a < carta.length; a++) {
            if (carta[a].idGrupo  === grupo) {
                let platos = carta[a].plato
                for (let b = 0; b < platos.length; b++) {
                    if (platos[b].idPlato  === plato) {
                        carta[a].plato[b].cantidad = valor;
                        if (valor  === 0) {
                            carta[a].plato[b].pedido = false;
                        } else {
                            carta[a].plato[b].pedido = true;
                        }
                        this.setState({ carta: carta });
                        this.handleSubtotal(carta)
                        return;
                    }
                }
            }
        }
    }

    /**
     * gestionar subtotal
     */
    handleSubtotal(carta) {
        let subtotal = 0
        for (let a = 0; a < carta.length; a++) {
            let platos = carta[a].plato
            for (let b = 0; b < platos.length; b++) {
                if (platos[b].pedido) {
                    subtotal += (platos[b].cantidad * platos[b].precio)
                }
            }
        }
        this.setState({ subtotal: subtotal });

    }

    pedir() {
        this.props.ordenarMenu({
            receptor: this.state.receptor,
            pedido: 'C',
            menu: this.state.carta,
            precio: this.state.subtotal
        });
        this.props.cambiarVista(VISTAS.RESUMEN.CMD);
    }



    render() {
        let datos = this.state.carta;
        console.log(this.state.carta)
        return (
            <div>
                <div className={Estilos.textFlex}>
                    <input
                        type="text"
                        defaultValue={this.state.receptor}
                        onKeyUp={e => this.setState({ receptor: e.target.value })}
                        placeholder="¿Para quién es este menú?"
                        className={Estilos.formControl}
                        style= {{width:"80%"}}
                    />
                    <br/>
                    <button className={Estilos.boton}
                        onClick={e => this.abandonar(VISTAS.CANCELAR.CMD)}>
                        {VISTAS.CANCELAR.TXT}
                    </button>
                    
                    <button
                        className={Estilos.boton}
                        onClick={this.pedir}
                        type="button"
                    >
                        Reservar ahora!
                    </button>
                    
                </div>

                <div className={Estilos.textLeft}>
                    <div className={Estilos.wrap_products}>
                        <div className={Estilos.subtotal}>
                            <b>Subtotal: {this.state.subtotal} &euro;</b>
                        </div>
                        {datos.map((grupo, i) =>
                            <ListaGrupo
                                key={i}
                                grupo={grupo}
                                subtotal={this.subtotal}
                                handleCantidad={this.handleCantidad}
                                handleCheckbox={this.handleCheckbox}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}