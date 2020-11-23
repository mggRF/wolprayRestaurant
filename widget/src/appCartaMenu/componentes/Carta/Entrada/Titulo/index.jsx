import {Component} from 'react';

export default class Titulo extends Component{
    constructor(props){
        super(props);
        this.state = {
            titulo:props.titulo
        };
    }
    render(){
        return (
            <div>
                <h2>
                    {this.state.titulo}
                </h2>
            </div>
        )
    }
}