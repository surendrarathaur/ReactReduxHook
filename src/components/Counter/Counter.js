import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <button onClick={this.increment}>Clieked Increment {this.state.count} times</button>
                <button onClick={this.decrement}>Clieked decrement {this.state.count} times</button>
            </div>
        )
    }
}
