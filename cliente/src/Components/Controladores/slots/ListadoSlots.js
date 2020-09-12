import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, CLUBS} from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';



import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';
import ListadoSlotsSegundaPantalla from './ListadoSlotsSegundaPantalla';


export default class ListadoSlots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meses:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
            datos: [],
            idmes:'',
            nombremes:'',
            clubid:0,
            clubname:'',
            clubs:[],
            desplegable:'',
            error: ""
        }
        console.log('CONSTRUCTOR STATE', this.state)
        this.onChangeDesplegable = this.onChangeDesplegable.bind(this)
        this.leeTablaClubs = this.leeTablaClubs.bind(this);
        this.leeTablaSlots = this.leeTablaSlots.bind(this);
        this.gl = new GestorListado(API_URL + CLUBS, this.leeTablaClubs);
        
    }
    onChangeDesplegable(e){
        console.log("ESTOS SON LAS TARGETS", e.target.value.split(',')[1])
        if(e.target.id === 'clubs'){
            this.setState({
                clubid:e.target.value.split(',')[0],
                clubname:e.target.value.split(',')[1]
            });
            console.log('ESTO ES PARA CLUBS DESD STATE', this.state.clubid)
        }else if(e.target.id === 'meses'){
            this.setState({
                idmes:e.target.value.split(',')[0],
                nombremes:e.target.value.split(',')[1]

        });
            
            console.log('ESTO ES PARA MESES DESD STATE', this.state.mes)
        }
        console.log(this.state)

    }

    leeTablaSlots() {
        AccesoAPI.accederApi(this.gl.terminaURLlistado())
            .then(response => {
                console.log("RESPONDE DESDE LISTADOCLUB", response);
                if (response.Ok) {
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ datos: response.Datos });
                }

            })
    }

    leeTablaClubs() {
        AccesoAPI.accederApi(API_URL + CLUBS)
            .then(response => {
                console.log("RESPONDE DESDE LISTADOCLUB", response);
                if (response.Ok) {
                    this.setState({ clubs: response.Datos })
                }
                else {
                    this.setState({ clubs: response.Datos });
                }

            })
    }

    componentDidMount() {
        this.leeTablaClubs();
    }

monta(){
    //aqui montaremos el componente
}


    render() {



        let itemsDesplegableMeses = [];
        itemsDesplegableMeses.push(<option key="0" value="0">Selecciona....</option>);
        if (this.state.meses.length > 0) {
            this.state.meses.forEach((valor, index) => {
                itemsDesplegableMeses.push(<option key={index + 1} value={'0'+(index+1)+','+valor}>{valor}</option>);
            });
        }

        let itemsDesplegableClubs = [];
        itemsDesplegableClubs.push(<option key="0" value="0">Selecciona....</option>);
        if (this.state.clubs.length > 0) {
            this.state.clubs.forEach((valor, index) => {
                itemsDesplegableClubs.push(<option key={index + 1} value={valor.clubid+','+valor.clubName}>{valor.clubid } {valor.clubName}</option>);
            });
        }
        
        let listado = false;

            if(this.state.clubid != 0 &&  this.state.idmes != '') listado = true;
            else listado = false;
            return (
            
            <div className="container animate__animated animate__fadeIn">
            <div className = 'cabecera_controlador'>
                <h1>Listado Slots</h1> 
            
            </div>
            
            <table className ="table">
                <thead>
                    <tr>
                    <MontaCabecera separador='th'
                    funcion={this.gl.setSortedField}
                    lista={[
                        ['meses', 'Escoge mes'],
                        
                    ]} />
                    <th></th><th></th><th></th>
                    </tr>
                </thead>
                <tbody>
                <div className='container'>

    
                    
                <select name='meses'
                id='clubs'
                className="form-control"
                onChange={this.onChangeDesplegable}
                 >
                {itemsDesplegableClubs}
                </select>


                <select name='meses'
                id='meses'
                className="form-control"
                onChange={this.onChangeDesplegable}
                 >
                {itemsDesplegableMeses}
            </select>
            </div>
                </tbody>

            </table>
            <div>
            {(listado)?
                    <ListadoSlotsSegundaPantalla  mes = {this.state.idmes} clubid = {this.state.clubid} clubname={this.state.clubname} nombremes={this.state.nombremes} trabajo={this.props.trabajo} />
                    :null}
            
            </div>
        </div>
        )
    }
  
}
ListadoSlots.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}