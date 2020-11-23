import {Component} from 'react';

import {css} from './css/css.Menu_Detalle.js';

import swal from 'sweetalert';
import { VISTAS } from '../Constantes/Constantes.js';

export default class MenuDetalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            modificado:0,
            seleccion:{},
            seleccionados:[],
            receptor: '',
            alert:false,
            nuevaVista:''
        };
    }
    abandonar = async vista => {
        if (this.state.modificado){
            swal({
                text: "¿Realmente desea abandonar?",
                title: "Va a abandonar el menú",
                icon:'info',
                buttons:["Abandonar", "Continuar"],

            }).then(respuesta => {
                if (!respuesta){
                    this.props.cambiarVista(vista);
                }
            });
        }
        else{
            this.props.cambiarVista(vista);
        }
    }
    cambiarSeleccionados = (event, name) => {
        let target = event.target;
        let value = target.value;
        let idGrupo = target.name;
        let seleccionados =  this.state.seleccionados;
        seleccionados[idGrupo] = {
            idPlato:value,
            name:name
        };
        this.setState({
            seleccionados:seleccionados,
            modificado:1
        });
        
    }
    pedir = _ =>{
         this.props.ordenarMenu({
            receptor:this.state.receptor,
            pedido:this.state.seleccionados,
            menu:this.props.menu,
            precio:this.props.menu.precio
        });
        this.props.cambiarVista(VISTAS.RESUMEN.CMD);
    }
    contar(lista){
        let count=0;
        for(let i = 0; i < lista.length; ++i){
            if(lista[i] && lista[i]!==undefined)
                count++;
        }
        return count

    }
    render(){
        let grupos= this.contar(this.props.menu.menu); 
        return(
            <div className="text-center">
                <style>
                    {css}
                </style>
                <button className="boton"  onClick={e => this.abandonar(VISTAS.RESUMEN.CMD)}>Cancelar</button>
                <button className="boton"  onClick={e => this.abandonar(VISTAS.COMPRA.CMD)}>{VISTAS.COMPRA.TXT}</button>
                <button 
                    className="boton" 
                    disabled={this.contar(this.state.seleccionados) !== 0 } 
                    onClick={this.pedir}
                    type="button"
                >
                    Resumen
                </button>
                <form>
                    <div className="contenedor">
                        <div className="menu">
                            <div className="cabeceraMenu">
                                <h3>{this.props.menu.descripcion}</h3>
                            </div>
                            <div className="cuerpoMenu">
                                <div className="precio">{this.props.menu.precio}</div>

                                {this.props.menu.menu.map((tipoGrupo, index) => 
                                    <div key={index} className="grupo">
                                        <div className="titGrupo">{tipoGrupo.grupName}</div>
                                        {tipoGrupo.plato.map((plato, index2) => 
                                            <div key={index2} className="plato">
                                                <input 
                                                    type="radio" 
                                                    value={plato.idPlato}
                                                    name={tipoGrupo.idGrupo}
                                                    onClick={e => this.cambiarSeleccionados(e, plato.name)}
                                                /> {plato.name}
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div>
                                    <input 
                                        type="text" 
                                        defaultValue={this.state.receptor} 
                                        onKeyUp={e => this.setState({receptor:e.target.value})} 
                                        placeholder="¿Para quién es este menú?"
                                        className="form-control"
                                    />
                                </div>
                                <button 
                                    className="boton" 
                                    disabled={this.contar(this.state.seleccionados) !== grupos }                                     onClick={e => this.pedir()}
                                    type="button"
                                >
                                    Reservar ahora!
                                </button>
                                <div key="3" className="comentario">{this.props.menu.detalles}</div>
                            </div>
                        </div>
                    </div>
                </form>
                

            </div>
        );
    }
}