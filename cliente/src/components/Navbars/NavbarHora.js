import React, { Component } from 'react'
import Button from 'components/CustomButtons/Button.js'


export default class NavbarHora extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.makeBrand = this.makeBrand.bind(this)
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

    makeBrand(user) {
        let name = null

        this.props.routes.map((prop) => {

            if (user.role && (Number(prop.level) <= Number(user.role))) {
                if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
                    name = prop.name
                }
            }

            return null
        })
        return name
    }
    render() {
        let user = this.props.user
        let classes = this.props.classes
        return (
            <div className={classes.flex} >
                
                    
                        <Button color="transparent" href="#" className={classes.title}>
                            <span>{this.makeBrand(user)}</span>
                        </Button>
                   

                    
                        <span className="letraTitulo" >Operador:</span>
                        <span className="letraValor"> {user.userName} </span>
                    

                   
                        <span className="letraTitulo">     Local:</span>
                        <span className="letraValor" > {user.local}</span>
                    
                        <span className="letraHora">  Hora {this.state.date.toLocaleDateString()} - {this.state.date.toLocaleTimeString()}</span>
              
            </div >
        )
    }
}