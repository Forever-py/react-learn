import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    // 初始化阶段
    constructor(props) {
        super(props);
        this.state = {
            n: 0,
        }
        console.log("constructor", "一个新的组件诞生了")
    }

    // 挂载阶段
    componentWillMount() {
        console.log('componentWillMount', "组件即将被挂载")
    }
    timer = null;
    componentDidMount() {
        console.log('componentDidMount', "挂载完成")
        this.timer = setInterval(() => {
            console.log('aaaa');
        }, 1000)
    }

    // 更新阶段
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', "接收到新的属性值", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', "是否应该重新渲染", this.props, nextProps, this.state, nextState); // this.props 当前属性， this.state 当前状态
        if (nextProps.n < 3) return true;
        else return false;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate', '组件即将被重新渲染')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', '组件重新渲染完成', prevProps, prevState)
    }

    // 销毁阶段
    componentWillUnmount() {
        console.log('componentWillUnmount', '组件被销毁');
        clearInterval(this.timer);
    }

    render() {
        console.log('render', "渲染,返回的React元素会被挂载到虚拟DOM树中")
        return (
            <div>
                <h1>旧版生命周期组件</h1>
                <h2>属性n: {this.props.n}</h2>
                <h2>状态n: {this.state.n}</h2>
                <button onClick={() => { this.setState((state) => ({ n: state.n + 1 })) }}>状态n + 1</button>
            </div>
        )
    }
}
