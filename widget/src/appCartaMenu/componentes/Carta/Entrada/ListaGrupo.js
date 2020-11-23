import { Component } from 'react';


import './styles.css';


export default class ListaGrupo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grupo: props.grupo,
            pedido: props.pedido,
            checkboxes: {}
        };
        this.subtotal = props.subtotal;
        this.setCarta = props.setCarta;
    }
    // componentDidUpdate = (next_props, next_state) => {
    //     if (next_props.entrada !== this.props.entrada && next_props.pedido !== this.props.pedido) {
    //         this.setState({
    //             ...this.state,
    //             entrada: next_props.entrada ? next_props.entrada : this.state.grupo,
    //             pedido: next_props.pedido ? next_props.pedido : this.state.pedido,
    //         })
    //     }
    // }

    quantityHandler = async checkbox => {
        let parent = checkbox.closest('div');
        let form = parent.closest('form');
        let quantityInput = parent.children[2];
        let idPlato = checkbox.dataset.idplato;
        let newCheckboxes = Object.assign({}, this.state.checkboxes);
        let newPedido = Object.assign({}, this.state.pedido);
        this.subtotal(checkbox.closest('form'));
        newCheckboxes[idPlato] = !newCheckboxes[idPlato];
        if (checkbox.checked) {
            quantityInput.disabled = false;
            quantityInput.value = 1;

        } else {
            quantityInput.disabled = true;
            quantityInput.value = 0;
        }

        newPedido[idPlato] = quantityInput.value;
        this.setState({
            pedido: newPedido,
            checkboxes: newCheckboxes

        });
        this.subtotal(form);
    }
    changeAmount = event => {
        let input = event.target;
        let newPedido = Object.assign({}, this.state.pedido);
        let idPlato = input.dataset.idplato;
        let value = input.value;
        let newCheckboxes = Object.assign({}, this.state.checkboxes);
        newPedido[idPlato] = value;
        if (value > 0) {
            newCheckboxes[idPlato] = true;
        } else {
            newCheckboxes[idPlato] = false;
        }
        this.setState({
            pedido: newPedido,
            checkboxes: newCheckboxes
        });
        this.subtotal(event.target.closest('form'));
    }
    render() {
        let ListadoDelGrupo = [];
        const platos = this.state.grupo.plato;
        platos.forEach((plato, index) => {
            ListadoDelGrupo.push(
                <div key={index} className="box" >
                    <input type="checkbox"
                        onClick={this.quantityHandler}
                        checked={this.state.pedido && this.state.pedido[plato.idPlato] > 0}
                    />

                    <label className="titlePlato" > {plato.name} </label>
                    <input type="number"
                        className="quantityPlato floatRight"
                        step="1"
                        min="0"
                        placeholder="U"
                        onChange={this.changeAmount}
                        defaultValue={this.state.pedido && this.state.pedido[plato.idPlato]}
                    />
                    <label className="floatRight" >
                        &nbsp; {plato.precio} &euro;
                    </label>
                    <div> {plato.notas} </div>
                </div >
            )
        })

        return (
            <div key={this.state.grupo.idGrupo}
                className="containerProducts">
                <h3>{this.state.grupo.grupName}</h3>
                {ListadoDelGrupo}
            </div>
        )
    }
}