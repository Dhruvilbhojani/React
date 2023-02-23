import React, { Component } from 'react'
import Title from './Title'

export class Home extends Component {
    render() {
        return (
            <div>
                <Title />
                <Title name="Day-01" />
                <Title name="Day-02">
                    <p>Title with some other descriptions</p>
                </Title>
                <Title name="Day-03" />
                <p>Amazing work by TatvaSoft Company by arranging this Instrial project</p>
            </div>
        )
    }
}

export default Home