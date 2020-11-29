import { Component } from 'react';
import { menu } from '../data/menu.js';

import MenuLista from './Menu_Lista.js';
import MenuDetalle from './Menu_Detalle.js';
import Pedidos from './Pedidos.js';
import Carta from './Carta/Carta.js';
import Botonera from './Botonera.js';
import Datos from './Compra/Compra.js';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import json from './Carta/Data/json.js';
import { VISTAS } from '../Constantes/Constantes.js';
import Estilos from './MenuCarta.module.css'
// import {Pedidos} from './Pedidos.js';
import MenuListaGrande from './MenuListaGrande';

export default class Resumen extends Component {
    static defaultProps = {
        iniciar: VISTAS.MEN_LISTA_GRANDE.CMD
    }

    constructor(props) {
        super(props);

        this.state = {
            mostrando: this.props.iniciar,
            pedidos: [],        //todos los pedidos hechos
            menu: [],
            menuSeleccionado: [],   // Toda la informacion del menu/carta seleccionado
            ordenMenu: [],   //es al pedir:receptor, CoM, menu, precio
            datos: {
                nombre: '',
                direccion: '',
                telefono: '',
                hora: '',
                poblacion: ''
            },
            cartaBase: [],              //carta original nula
            idMant: null,                  //numero de elemento en modificacion
            pedido: []
        };
    }
    componentDidMount() {
        this.leerMenu();
        this.leerCarta();
        // this.cambiarVista(this.props.iniciar);
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
                    cantidad: 0
                }
            })
            elem.plato = sale
            return elem;

        })
        this.setState({ cartaBase: comple },);

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
            idMant: 0,
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

        if (vista === VISTAS.CAR_DET.CMD) {        //salto a carta detalle
            this.leerCarta()
            this.setState({
                menuSeleccionado: Array.from(this.state.cartaBase),
                pedido: 'C'
            });
        }
        if (vista === VISTAS.MEN_LISTA || vista === VISTAS.MEN_LISTA_GRANDE) {
            if (this.props.iniciar === VISTAS.MEN_LISTA_GRANDE.CMD) {
                vista = VISTAS.MEN_LISTA_GRANDE.CMD
            }
            this.setState({ pedido: menu });
        }
        this.setState({ mostrando: vista });
    }

    cambiarMenuSeleccionado = menu => {
        this.setState({
            menuSeleccionado: menu,
            pedido: []
        });
    }


    // Anota la compra en la lista
    /**
     * Llega un objeto con 
     *      receptor - el nombre del receptor
     *      pedido  - C - es carta, M es Menu
     *      menu    -   la lista de platos, con la marca de solicitados
     *      precio  - importe de la comanda
     * 
     * se añade a ordenar menu
     * @param {*} menu 
     */
    ordenarMenu = menu => {


        if (this.state.idMant === null) {
            this.setState({
                ordenMenu: [...this.state.ordenMenu, menu]
            });
        } else {
            let om = this.state.ordenMenu
            om[this.state.idMant] = menu;
            this.setState({
                idMant: null,
                ordenMenu: om
            });

        }

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

    editarPedido = (pedido, index) => {
        console.log(pedido);
        this.setState({
            menuSeleccionado: pedido.menu,
            pedido: pedido.pedido,
            idMant: index
        });
        console.log('va a edicion', pedido, index)
        if (pedido.pedido === 'C') {
            this.cambiarVista(VISTAS.CAR_DET.CMD);
        } else {
            this.cambiarVista(VISTAS.MEN_DET.CMD);
        }
    }

    render() {
        console.log('mostrar', this.state.mostrando)
        if (this.state.mostrando === VISTAS.RESUMEN.CMD) {
            swal({
                text: "En esta pantalla puedes escoger entre ver la carta, ver el menu, ir a encargar lo que hayas seleccionado, o cancelar toda la operacion\n  Si ya has encargado algo, te aparecera en la lista superior... que tambien puedes modificar",
                title: "Presentación",
                icon: 'info',
                buttons: ["Continuar"],
                position: "top-start"

            })
        }
        if (this.state.mostrando === VISTAS.MEN_LISTA.CMD || this.state.mostrando === VISTAS.MEN_LISTA_GRANDE.CMD) {
            swal({
                text: "Aquí puedes hacer una selección acerca del menu que quieres elegir, a continuación te pediremos que indiques los platos",
                title: "Presentación",
                icon: 'info',
                buttons: ["Continuar"],
                position: "top-end"

            })
        }
        if (this.state.mostrando === VISTAS.MEN_DET.CMD) {
            swal({
                text: "Ha llegado el momento de elegir los platos que deseas comer; de cada grupo puedes elegir uno (y solo uno); al finalizar, puedes indicar tu nombre para que sepamos para quien es el menu",
                title: "Presentación",
                icon: 'info',
                buttons: ["Continuar"],
                position: "top-end"

            })
        }
        if (this.state.mostrando === VISTAS.CAR_DET.CMD && this.state.menuSeleccionado.length > 0){
            swal({
                text: "Si has decidido pedir la comida a la carta, ahora puedes ir señalando los platos que deseas y el total se ira acumulando en la parte superior\n Cuando termines, no te olvides indicar parta quien es el encargo. Ah! si quieres mas de un plato, a la derecha encontraras la posibilidad de marcar todos los que quieras",
                title: "Presentación",
                icon: 'info',
                buttons: ["Continuar"],
                position: "botton-end"

            })
        }
        if (this.state.menu === []) this.leerMenu();          //para inicios con
        if (this.state.cartaBase === []) this.leerCarta();    //salto directo
        //if (this.state.pedido === []) this.setState({pedido :Array.from(this.state.cartaBase)});

        return (
            <div className={Estilos.textCenter}>
                <div>
                    {/* {JSON.stringify(this.state.ordenMenu)} */}
                </div>
                {
                    (this.state.mostrando === VISTAS.RESUMEN.CMD) ?
                        <>
                            <Pedidos
                                ordenMenu={this.state.ordenMenu}
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
                    (this.state.mostrando === VISTAS.MEN_LISTA_GRANDE.CMD) ?
                        <MenuListaGrande
                            cambiarVista={this.cambiarVista}
                            menu={menu}
                            cambiarMenuSeleccionado={this.cambiarMenuSeleccionado}
                        />
                        : null
                }
                {
                    (this.state.mostrando === VISTAS.CAR_DET.CMD && this.state.menuSeleccionado.length > 0) ?
                        <Carta
                            cambiarVista={this.cambiarVista}
                            setCarta={this.setCarta}
                            carta={this.state.menuSeleccionado}
                            ordenarMenu={this.ordenarMenu}
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
                                ordenMenu={this.state.ordenMenu}
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
                            pedido={this.state.pedido}
                        />
                        : null
                }

            </div>
        );
    }
}