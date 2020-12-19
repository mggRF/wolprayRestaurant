import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Estilo from '../headerstyle.module.css';



export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                <div className="row align-item-center">

                    <div className="col-md-12" >

                        <h4 className={Estilo.titulo}>Mantenimiento del restaurante</h4>
                        <span className={Estilo.hora}> {this.state.date.toLocaleDateString()} - {this.state.date.toLocaleTimeString()}</span>

                    </div>

                </div>
            </div>
        )

    }
}