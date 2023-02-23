import React, { Component } from 'react'
import Title from './Title'

export class Home extends Component {

    constructor() {
        super()
        this.state = {
            title: "Day-03",
            description: "Day 03 as using state"
        }
    }

    render() {
        return (
            <div>
                <Title />
                <Title name="Day-01" />
                <Title name="Day-02">
                    <p>Amazing work by TatvaSoft Company by arranging this Industrial project</p>
                </Title>
                <Title name={this.state.title}>
                    <p>{this.state.description}</p>
                </Title>
            </div>
        )
    }
}

export default Home