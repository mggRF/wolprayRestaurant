import {Component} from 'react';
import swal from 'sweetalert';

import './style.css';

export default class Datos extends Component{
    constructor(props){
        super(props);
        this.changeValueDatos = this.props.changeValueDatos;
        this.changeVista = this.props.cambiarVista;
        this.cambiarVista = this.props.cambiarVista;
        this.state={datos:{}};
        this.cancelar = this.props.cancelar;
    }
    
    render(){
        return (
            <div className="wrap_form">
                <h4>Datos de entrega</h4>
                <form className="formDatos">
                    <input 
                        type="text" 
                        defaultValue={this.props.datos.nombre}
                        onKeyUp={e => this.changeValue(e)} 
                        name="nombre" 
                        placeholder="Nombre" />
                    <input 
                        type="text" 
                        defaultValue={this.props.datos.direccion}
                        onKeyUp={e => this.changeValue(e)} 
                        name="direccion" 
                        placeholder="Dirección" />
                    <input 
                        type="text" 
                        defaultValue={this.props.datos.poblacion}
                        onKeyUp={e => this.changeValue(e)} 
                        name="poblacion" 
                        placeholder="Población" />
                    <input 
                        type="text" 
                        defaultValue={this.props.datos.telefono}
                        onKeyUp={e => this.changeValue(e)} 
                        name="telefono" 
                        placeholder="Teléfono" />
                    <input 
                        type="text" 
                        defaultValue={this.props.datos.hora}
                        onKeyUp={e => this.changeValue(e)} 
                        name="hora" 
                        placeholder="Hora de entrega" />
                    
                    <button 
                        type="button" 
                        className="botonDatos" 
                        onClick={e =>  swal({
                            title:'Orden tomada correctamente',
                            text:'Pronto nos pondremos en contacto contigo',
                        }).then(respuesta => {
                            if (respuesta){
                                this.cancelar();
                            }
                        })}>
                        Comprar
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button 
                        type="button" 
                        className="botonDatos" 
                        onClick={e => {
                            this.changeVista('Resumen');
                        }}>
                        Añadir
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button 
                        type="button" 
                        className="botonDatos" 
                        onClick={e => this.cancelar()}>
                        Cancelar
                    </button>
                    <br/>
                    <br/>
                </form>
            </div>
        )
    }
}