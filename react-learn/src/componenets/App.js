import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'

export default class App extends Component {
    state = {
        number: 1,
        show: true,
    }
    render() {
        const comp = this.state.show ? <OldLifeCycle n={this.state.number} /> : null;
        return (
            <div>
                {comp}
                <button onClick={() => { this.setState((state) => ({ number: state.number + 1 })) }}>n + 1</button>
                <button onClick={() => { this.setState((state) => ({ show: !state.show })) }}>{this.state.show ? '隐藏' : '显示'}</button>
            </div>
        )
    }
}
