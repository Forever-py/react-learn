import React, { Component } from 'react'
// import Test from './Test'
import NewLifeCycle from './NewLifeCycle';

export default class App extends Component {
    state = {
        number: 1,
    }
    render() {
        return (
            <div>
                <NewLifeCycle n={this.state.number} />
                <button onClick={() => { this.setState((state) => ({ number: state.number + 1 })) }}>父组件n + 1</button>
            </div>
        )
    }
}
