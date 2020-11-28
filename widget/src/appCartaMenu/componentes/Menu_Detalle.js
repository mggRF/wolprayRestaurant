import { Component } from 'react';
import swal from 'sweetalert';
import { VISTAS } from '../Constantes/Constantes.js';
import Estilos from './MenuCarta.module.css'

export default class MenuDetalle extends Component {
    constructor(props) {
        super(props);
        let tempCheckboxes = {};
        this.props.menu.menu.forEach(tipoGrupo =>
            tempCheckboxes[tipoGrupo.idGrupo] = false
        )

        this.state = {
            modificado: 0,
            seleccion: {},
            seleccionados: [],   //gurada el plato seleccionado en cadaa grupo
            receptor: '',
            alert: false,
            nuevaVista: '',
            checkboxes: tempCheckboxes
        };
    }
    checked = idPlato => {
        let selected = false;
        this.props.pedido.forEach(e => {
            if (e.idPlato === idPlato) {
                selected = true;
            }
        });
        this.state.seleccionados.forEach(e => {
            if (e.idPlato === idPlato) {
                selected = true;
            }
        });
        return selected;
    }
    changeCheckboxes = _ => {
        let tempCheckboxes = {};
        let seleccionados = this.state.seleccionados;

        if (this.props?.pedido?.length) {
            this.props.pedido.forEach((grupo, index) => {
                seleccionados[index] = {
                    idPlato: grupo.idPlato,
                    name: grupo.name
                };
                tempCheckboxes[index] = grupo.idPlato

            }
            )
            this.setState({
                checkboxes: tempCheckboxes,
                seleccionados: seleccionados
            });
        }

    }
    componentDidMount(props) {
        this.changeCheckboxes();
    }
    abandonar = async vista => {
        if (this.state.modificado) {
            swal({
                text: "¿Realmente desea abandonar?",
                title: "Va a abandonar el menú",
                icon: 'info',
                buttons: ["Abandonar", "Continuar"],

            }).then(respuesta => {
                if (!respuesta) {
                    this.props.cambiarVista(vista);
                }
            });
        }
        else {
            this.props.cambiarVista(vista);
        }
    }
    cambiarSeleccionados = (event, name) => {
        let target = event.target;
        let value = target.value;
        let idGrupo = target.name;
        let seleccionados = this.state.seleccionados;


        //       let tempCheckboxes = Object.assign({}, this.state.checkboxes);
        //       tempCheckboxes[idGrupo] = value;

        this.setState({
            seleccionados: this.guardar(seleccionados, idGrupo, { idPlato: value, name: name }),
            modificado: 1,
            //           checkboxes: tempCheckboxes
        });

    }

    /**
     * Va añadiendo elementos a un array, identificados por grupo
     * 
     * @param {[]} lista 
     * @param {any} grupo 
     * @param {object} valor 
     */
    guardar(lista, grupo, valor) {

        let resp = null;
        if (lista && lista.length > 0) {
            for (let a = 0; a < lista.length && resp === null; a++) {
                let dato = lista[a];
                if (dato.idGrupo == grupo) { //Ha de quedar asi, si no, se necesita cust
                    lista[a].valor = valor;
                    resp = lista
                }
            }
        }
        if (resp === null) {
            lista.push({
                idGrupo: grupo,
                valor: valor
            })
            resp = lista;
        }
        return resp;
    }
    /**
     * Dado un grupo, extrae el valor correspondiente
     * @param {*} lista 
     * @param {*} grupo  
     */
    extraer(lista, grupo) {
        let resp = null;
        if (lista && lista.length > 0) {
            for (let a = 0; a < lista.length && resp === null; a++) {
                let dato = lista[a];
                // eslint-disable-next-line eqeqeq
                if (dato.idGrupo  ==  grupo) {    //para comprobar por === deberia hacer cast
                    resp = dato.valor;
                }
            }
        }
        return resp;
    }
    /**
     * comprobar si dentro del grupo indicado existe el plato indicado
     * @param {*} lista 
     * @param {*} grupo 
     * @param {*} valor 
     */
    comprobarChecked(lista, grupo, valor) {
        let check = this.extraer(lista, grupo);
        if (check) {
            // eslint-disable-next-line eqeqeq
            return check.idPlato  == valor; //para comprobar por === deberia hacer cast
        }
        return false;
    }
    pedir = _ => {
        this.props.ordenarMenu({
            receptor: this.state.receptor,
            pedido: 'M',
            menu: this.state.seleccionados,
            precio: this.props.menu.precio
        });
        this.props.cambiarVista(VISTAS.RESUMEN.CMD);
    }
    contar(lista) {
        let count = 0;
        for (let i = 0; i < lista.length; ++i) {
            if (lista[i] && lista[i] !== undefined)
                count++;
        }
        return count

    }
    render() {
        let grupos = this.contar(this.props.menu.menu);
        return (
            <div className={Estilos.text_center}>
            <div className={Estilos.botonera}>
                <button className="boton" onClick={e => this.abandonar(VISTAS.RESUMEN.CMD)}>Cancelar</button>
                
                </div>
                <form>
                    <div className={Estilos.contenedor}>
                        <div className={Estilos.menu}>
                            <div className={Estilos.cabeceraMenu}>
                                <label  className={Estilos.menuH3}>Menú</label>
                                <small className={Estilos.smallMenu}>{this.props.menu.descripcion}</small>
                            </div>
                            <div className={Estilos.cuerpoMenu}>
                                <div className={Estilos.precio}><span className={Estilos.spanPrecio}>{this.props.menu.precio}</span></div>

                                {this.props.menu.menu.map((tipoGrupo, index) =>
                                    <div key={index} className="grupo">
                                        <div className={Estilos.titGrupo}>{tipoGrupo.grupName}</div>
                                        {tipoGrupo.plato.map((plato, index2) =>
                                            <div key={index2} className={Estilos.plato}>

                                                <input
                                                    type="radio"
                                                    checked={this.comprobarChecked(this.state.seleccionados, tipoGrupo.idGrupo, plato.idPlato)}
                                                    value={plato.idPlato}
                                                    name={tipoGrupo.idGrupo}
                                                    onChange={e => this.cambiarSeleccionados(e, plato.name)}
                                                /> {plato.name}
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div>
                                    <input
                                        type="text"
                                        defaultValue={this.state.receptor}
                                        onKeyUp={e => this.setState({ receptor: e.target.value })}
                                        placeholder="¿Para quién es este menú?"
                                        className={Estilos.formControl}
                                    />
                                </div>
                                <button
                                    className={Estilos.boton}
                                    disabled={this.contar(this.state.seleccionados) !== grupos} 
                                    onClick={this.pedir}
                                    type="button"
                                >
                                    Reservar ahora!
                                </button>
                                <div key="3" className={Estilos.comentario}>{this.props.menu.detalles}</div>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        );
    }
}