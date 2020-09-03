import React, { Component } from "react";
import PropTypes from "prop-types";
import { LPPAGINA, API_URL } from "../Components/Constantes";
import AccesoAPI from './AccesoAPI';

export default class Paginacion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paging: {
                offset: 0,
                limit: 10,
                totalPaginas:0,
                lppagina:LPPAGINA

            },
            active: 0
        };
    }

    leerContador() {
        AccesoAPI.accederApi(API_URL + this.props.tabla + '/count')
            .then(response => {
                console.log(response);
                if (response.Respuesta === "ok") {
                    let contador = response.Datos.contador;
                    let paginas = contador / this.state.lppagina;
                    this.setState({ totalPaginas: paginas ,});
                }
                else {
                    this.setState({ error: response.Respuesta });
                }

            })
    }
    componentDidMount(){
        this.leerContador()
    }

    buildComponent = () => {
        const { totalPaginas } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= totalPaginas; i++) {
            pageNumbers.Push(i);
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
            {pageNumbers.map( number => {
                    if (
                        number >= parseInt(active) - 3 &&
                        number <= parseInt(active) + 3
                    ) {
                        return (
                            <button onClick={this.pagingHandler}>{ number }</button>                
                        );
                    } else {
                        return null;
                    }
                })
            }
            </>
        )

        ;
    };
    pagingHandler = (event) => {
        let offset = parseInt(event.target.id);
        this.setState({
            active: offset
        });
        this.props.pageHandler(event.target.id - 1);
    };

    nextHandler = () => {
        let active = this.state.active;
        this.setState({
            active: active + 1
        });
        this.props.pageHandler(active + 1);
    };

    backHandler = () => {
        let active = this.state.active;
        this.setState({
            active: active - 1
        });
        this.props.pageHandler(active - 1);
    };

    

    

    render() {
        return this.buildComponent(this.props, this.state);
    }

}
Paginacion.propTypes =
{
    tabla:PropTypes.string,
    paging: PropTypes.object,
    pageHandler: PropTypes.func
    
};