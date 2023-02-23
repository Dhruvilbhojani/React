import React, { Component } from 'react';

class welcome extends Component {
    render() {
        return (
            <div>
                <h1> Hello {this.props.name} lastname is {this.props.lname}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default welcome;