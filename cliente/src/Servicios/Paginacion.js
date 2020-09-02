import React, { Component } from "react";
//import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Paginacion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paging: {
                offset: 0,
                limit: 10
            },
            active: 0
        };
    }

    // leerContador() {
    //     AccesoAPI.accederApi(API_URL + this.props.file + '/count')
    //         .then(response => {
    //             console.log(response);
    //             if (response.Respuesta === "ok") {
    //                 let contador = response.Datos.contador;
    //                 let paginas = contador / LPPAGINA;
    //                 this.setState({ totalPages: paginas });

    //             }
    //             else {
    //                 this.setState({ error: response.Respuesta });
    //             }

    //         })
    // }
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

    renderPageNumbers = (pageNumbers, totalPages) => {
        let { active } = this.state;
        return 

            {pageNumbers.map(number => {
                    if (
                        number >= parseInt(active) - 3 &&
                        number <= parseInt(active) + 3
                    ) {
                        return (
                            { number }
                        );
                    } else {
                        return null;
                    }
                })
            }

        ;
    };

    buildComponent = (props, state) => {
        const { totalPages } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.Push(i);
        }
        return (
            <div className="pull-right">
                {this.renderPageNumbers(pageNumbers, totalPages)}
            </div>
        );
    };

    render() {
        return this.buildComponent(this.props, this.state);
    }

}
Paginacion.propTypes =
{
    paging: PropTypes.object,
    pageHandler: PropTypes.func,
    //totalPages: PropTypes.object
};