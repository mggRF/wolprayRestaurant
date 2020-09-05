import React, { Component } from 'react';
import './buttoncomponent.css';

class ButtonComponent extends Component {
    render() {
        const { text } = this.props;
        return <>

            <button className="logbtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </button>
        </>;
    }
}

export default ButtonComponent;