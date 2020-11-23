import { Component } from 'react';
import { menu } from '../data/menu.js';

import MenuLista from './Menu_Lista.js';
import MenuDetalle from './Menu_Detalle.js';
import Pedidos from './Pedidos.js';
import Carta from './Carta/Carta.js';
import Botonera from './Botonera.js';
import Datos from './Compra/Compra.js';
import swal from 'sweetalert';
import json from './Carta/Data/json.js';
import { VISTAS } from '../Constantes/Constantes.js';

// import {Pedidos} from './Pedidos.js';

export default class Resumen extends Component {
    static defaultProps = {
        iniciar: VISTAS.RESUMEN.CMD
    }

    constructor(props) {
        super(props);

        this.state = {
            mostrando: this.props.iniciar || VISTAS.RESUMEN.CMD,
            pedidos: [],
            menu: [],
            menuSeleccionado: [],
            ordenMenu: [],
            datos: {
                nombre: '',
                direccion: '',
                telefono: '',
                hora: '',
                poblacion: ''
            },
            cartaBase: [],              //carta original nula
            pedido: []
        };
    }
    componentDidMount() {
        this.leerMenu();
        this.leerCarta();
    }

    leerMenu = () => {
        this.setState({ menu: menu })
        return
    }
    leerCarta = () => {
        console.info("Leyento carta");
        let ori = json.Datos;
        let comple = ori.map(elem => {
            let sale = elem.plato.map(platou => {
                return {
                    pedido: false,
                    idPlato: platou.idPlato,
                    name: platou.name,
                    notas: platou.notas,
                    precio: platou.precio,
                    cantidad:0
                }
            })
            elem.plato = sale
            return elem;

        })
        this.setState({ cartaBase: comple });
    }

    cancelar = _ => {
        this.setState({
            mostrando: 'Resumen',
            pedidos: [],
            menu: [],
            menuSeleccionado: [],
            ordenMenu: [],
            datos: {
                nombre: '',
                direccion: '',
                telefono: '',
                hora: '',
                poblacion: ''
            },

            pedido: []
        })
        swal({
            title: "Órdenes borradas correctamente",
            text: 'Haga clic en ok',
            icon: 'info',

        })
    }

    setCarta = carta => {
        this.setState({
            carta: carta
        });
    }

    /**
     * control direccion de envio
     * @param {*} e 
     */
    changeValueDatos = e => {
        let input = e.target;
        let datos = this.state.datos;//Object.assign({}, this.state.datos);
        datos[input.name] = input.value;
        this.setState({
            datos: datos
        });
    }

    cambiarVista = vista => {
        this.setState({ mostrando: vista });
    }

    cambiarMenuSeleccionado = menu => {
        this.setState({ menuSeleccionado: menu });
    }
    ordenarMenu = menu => {
        this.setState({
            ordenMenu: [...this.state.ordenMenu, menu]
        });
    }
    eliminarMenu = index => {
        let title = `
            Va a proceder a eliminar el menú para ${this.state.ordenMenu[index].receptor}
        `;
        swal({
            text: "¿Realmente desea eliminar este menú?",
            title: title,
            icon: 'info',
            buttons: ["Eliminar", "No eliminar"],

        }).then(respuesta => {
            if (!respuesta) {
                this.setState({
                    ordenMenu: this.state.ordenMenu.filter((e, i) => i !== index)
                });
            }
        });

    }
    editarPedido = pedido => {
        this.setState({
            menuSeleccionado: pedido.menu
        });
        this.cambiarVista('Menu_Detalle');
    }

    render() {
        console.log('mostrar', this.state.mostrando);
        console.log(this.state.cartaBase)
        return (
            <div >
                <div>
                    {/* {JSON.stringify(this.state.ordenMenu)} */}
                </div>
                {
                    (this.state.mostrando === VISTAS.RESUMEN.CMD) ?
                        <>
                            <Pedidos
                                menu={this.state.ordenMenu}
                                editarPedido={this.editarPedido}
                                eliminarMenu={this.eliminarMenu}
                            />
                            <Botonera
                                cambiarVista={this.cambiarVista}
                                cancelar={this.cancelar}
                            />
                        </>
                        : null
                }

                {
                    (this.state.mostrando === VISTAS.MEN_LISTA.CMD) ?
                        <MenuLista
                            cambiarVista={this.cambiarVista}
                            menu={menu}
                            cambiarMenuSeleccionado={this.cambiarMenuSeleccionado}
                        />
                        : null
                }
                {
                    (this.state.mostrando === VISTAS.CAR_DET.CMD) ?
                        <Carta
                            cambiarVista={this.cambiarVista}
                            setCarta={this.setCarta}
                            pedido={this.state.carta}
                            carta={this.state.cartaBase.slice()}
                        />
                        : null
                }
                {
                    (this.state.mostrando === VISTAS.COMPRA.CMD) ?
                        <>
                            <Datos
                                changeValueDatos={this.changeValueDatos}
                                datos={this.state.datos}
                                cambiarVista={this.cambiarVista}
                                cancelar={this.cancelar}
                            />
                            <Pedidos
                                menu={this.state.ordenMenu}
                                editarPedido={this.editarPedido}
                                eliminarMenu={this.eliminarMenu}
                            />
                        </>
                        : null
                }
                {
                    (this.state.mostrando === VISTAS.MEN_DET.CMD) ?
                        <MenuDetalle
                            menu={this.state.menuSeleccionado}
                            cambiarVista={this.cambiarVista}
                            ordenarMenu={this.ordenarMenu}
                        />
                        : null
                }

            </div>
        );
    }
}