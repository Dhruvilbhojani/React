import React, { Component } from 'react'

export class Counter extends Component {

    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    increaseStateValue() {
        this.setState({
            number: this.state.number + 1
        });
    }

    render() {
        return (
            <div>
                <div>Number/Counter : {this.state.number}</div>
                <button onClick={() => this.increaseStateValue()}>Click here to increase the value: </button>
            </div>
        )
    }
}

export default Counter