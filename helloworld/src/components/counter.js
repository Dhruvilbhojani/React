import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("Calback state value", this.state.count)
        // })

        this.setState(
            prevState, props => ({
                count: prevState.count + 1
            })
        )
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default counter