import React, { Component } from 'react'
import Tick from './Tick'
export default class TickControl extends Component {

    state = {
        isOver: false // 倒计时是否完成
    }

    // bind 绑定this的第一种写法
    // constructor (props) {
    //     super(props);
    //     this.handleOver = this.handleOver.bind(this)
    // }

    // handleOver() {
    //     this.setState({ isOver: true }); // 直接这么些会报错，因为this将显示 undefined， 所以需要绑定this的指向
    // }

    // 利用箭头函数  表示handleOver不在原型上，而在对象上
    handleOver = () => {
        this.setState({ isOver: true });
    }

    render() {
        let status = "正在倒计时...";
        if (this.state.isOver) {
            status = "倒计时完成";
        }
        return (
            <div>
                <Tick onOver={this.handleOver} number={10} />
                {/* bind绑定this的第二种方法 */}
                {/* <Tick onOver={this.handleOver.bind(this)} number={10} /> */}
                <h2>{status}</h2>
            </div>
        )
    }
}
