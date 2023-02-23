import React, { Component } from 'react';

class message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor!!"
        }
    }

    changeMessage() {
        return this.setState({
            message: "Welcome Another Visitor!!"
        })
    }
    render() {
        return (
            <div>
                <h1> Welcome {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Dummmy</button>
            </div>
        )
    }
}

export default message;