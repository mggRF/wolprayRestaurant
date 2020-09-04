import React, { Component } from "react";
import PropTypes from "prop-types";
import { LPPAGINA, API_URL } from "../Components/Constantes";
import AccesoAPI from './AccesoAPI';

export default class Paginacion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            limit: 10,
            totalPaginas: 0,
            lppagina: LPPAGINA,
            active: 0
        };
    }

    componentDidMount() {
        this.leerContador()
    }
    pagingHandler = (event) => {
        let offset = parseInt(event.target.id);
        this.setState({
            active: offset
        });
        this.preparaPag(event.target.id - 1);
        //this.props.pageHandler(event.target.id - 1);
    };

    nextHandler = () => {
        let active = this.state.active;
        if (active <= this.state.totalPaginas) {
            this.setState({
                active: active + 1
            });
            //this.props.pageHandler(active + 1);
            this.preparaPag(active + 1);
        }
    };

    backHandler = () => {
        let active = this.state.active;
        if (active > 0) {
            this.setState({
                active: active - 1
            });
            //this.props.pageHandler(active - 1);
            this.preparaPag(active - 1);
        }
    };

    preparaPag= (offset) => {
        let salida = "?size=" + this.state.lppagina +", "
        salida += this.state.lppagina * offset
        this.props.pageHandler(salida);
    }



    leerContador() {
        AccesoAPI.accederApi(API_URL + this.props.tabla + '/count')
            .then(response => {
                if (response.Respuesta === "ok") {
                    let contador = response.Datos.contador;
                    let paginas = contador / this.state.lppagina;
                    this.setState({ totalPaginas: paginas, });
                }
                else {
                    this.setState({ error: response.Respuesta });
                }

            })
    }
    buildComponent = () => {
        const { totalPaginas } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= totalPaginas; i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="pull-right">
                {this.renderPageNumbers(pageNumbers, totalPaginas)}
            </div>
        );
    };

    renderPageNumbers = (pageNumbers, totalPaginas) => {
        let { active } = this.state;
        return (
            <>
                <button onClick={this.backHandler}> Anterior </button>
                {pageNumbers.map(number => {
                    if (
                        number >= parseInt(active) - 3 &&
                        number <= parseInt(active) + 3
                    ) {
                        return (
                            <button key={number} onClick={this.pagingHandler} id={number}>{number}</button>
                        );
                    } else {
                        return null;
                    }
                })
                }
                <button onClick={this.nextHandler}> Siguiente </button>
            </>
        )

            ;
    };


    render() {
        return this.buildComponent();
    }

}
Paginacion.propTypes =
{
    tabla: PropTypes.string,
    paging: PropTypes.object,
    pageHandler: PropTypes.func

};