import { Component } from 'react';


import Estilos from '../../MenuCarta.module.css'


export default class ListaGrupo extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };

    }


    relleno(pad, str, padLeft) {
        if (typeof str === 'undefined')
            return pad;
        if (padLeft) {
            return (pad + str).slice(-pad.length);
        } else {
            return (str + pad).substring(0, pad.length);
        }
    }

    ajuste(str, long = 60) {
        str = str + " ";
        return this.relleno('____________________________________________________________', str, false).substring(0, long);
    }

    render() {
        let ListadoDelGrupo = [];
        const platos = this.props.grupo.plato;
        let estiloInput = {
            width: "3em",
            height: "1.3em",
            padding: "0 0 0 4px",
            textAlign: "right",
            margin:"0 0 0 1em"

        }
        platos.forEach((plato, index) => {
            ListadoDelGrupo.push(
                <div key={index}  >
                    <div className={Estilos.cartaBox}>
                        <div>
                            <input type="checkbox"
                                className={Estilos.dnone}
                                checked={plato.pedido}
                                onChange={e => this.props.handleCheckbox(e, this.props.grupo.idGrupo, plato.idPlato)}
                            />
                            <span className={plato.pedido ? Estilos.checkmarkSelected : Estilos.checkmark }
                                onClick={e => {

                                    let checkbox = e.target.closest('div').querySelector('input');
                                    checkbox.click();
                                    // checkbox.dispatchEvent(event);
                                }}
                            ></span>
                            <label className={Estilos.titlePlato} > {plato.name} </label>
                        </div>
                        <div className={Estilos.lineaCarta}>
                            <hr className={Estilos.colorHR}/>
                        </div>
                        <div className={Estilos.rightCarta}>
                            <div>
                                <input type="number"
                                    style={estiloInput}
                                    className={Estilos.boxUnit}
                                    step="1"
                                    min="0"
                                    placeholder="U"
                                    onChange={e => this.props.handleCantidad(e, this.props.grupo.idGrupo, plato.idPlato)}
                                    value={plato.cantidad}
                                />
                                <label >
                                    {plato.precio}&euro;
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={Estilos.notas}> {plato.notas} </div>
                </div >
            )
        })

        return (
            <div key={this.props.grupo.idGrupo}
                className={Estilos.containerProducts}>
                <h3 className={Estilos.containerProducts_h3}>{this.props.grupo.grupName}</h3>
                {ListadoDelGrupo}
            </div>
        )
    }
}