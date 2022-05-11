import React, { Component } from 'react'

export default class Comp extends Component {

    state = {
        n: 0,
    }
    handleClick = () => {
        // this.setState({ n: this.state.n + 1 }, ()=> {
        //     // 状态完成改变之后触发   该回调运行在render之后
        //     console.log(this.state.n);
        // });

        this.setState(cur => {
            // 参数 cur 表示当前的状态
            // 该函数的返回结果，会混合(覆盖)掉之前的状态
            // 该函数是异步执行
            return {
                n: cur.n + 1
            }
        }, () => {
            console.log('state更新完成', this.state.n); // 会在所有状态更新完成,并且重新渲染后执行
        })
        this.setState(cur => ({ n: cur.n + 1 }));
        this.setState(cur => ({ n: cur.n + 1 }));

        // console.log(this.state.n); // 还没有重新渲染,说明目前状态仍然没有改变
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1>{this.state.n}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
