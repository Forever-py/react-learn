import React, { Component } from 'react'
import Test from './Test'

export default class App extends Component {
    state = {
        number: 1,
        show: true,
    }
    render() {
        const comp = this.state.show ? <Test n={this.state.number} /> : null;
        return (
            <div>
                {comp}
                <button onClick={() => { this.setState((state) => ({ number: state.number + 1 })) }}>父组件n + 1</button>
                {/* <button onClick={() => { this.setState((state) => ({ show: !state.show })) }}>{this.state.show ? '隐藏' : '显示'}</button> */}
            </div>
        )
    }
}
