// 计时器 用作倒计时
import React, { Component } from 'react'

export default class Tick extends Component {
    // 另一种初始化状态的写法, 这种写法属于JS Next 语法
    // state = {
    //     left: this.props.number,
    // }

    constructor(props) {
        super(props);
        // 初始化状态
        this.state = {
            left: this.props.number,
        }

        this.timer = setInterval(()=> {
            this.setState({left: this.state.left - 1}); // 重新设置状态,触发自动的重新渲染
            if(this.state.left === 0) {
                clearInterval(this.timer); // 清除定时器
            }
        },1000)
    }

  render() {
    return (
      <h1>
          倒计时剩余时间：{this.state.left}
      </h1>
    //   <h1>
    //       倒计时剩余时间：{this.props.number}
    //   </h1>
    )
  }
}

