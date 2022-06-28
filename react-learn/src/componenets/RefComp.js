import React, { Component } from 'react'


class A extends Component {
    method() {
        console.log('调用了组件A的方法');
    }

    render() {
        return <h1>组件A</h1>
    }
}

// function B() {
//     return <h1>组件B</h1>
// }

export default class RefComp extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.textRef = React.createRef();
    //     // 等价于
    //     this.textRef = {
    //         current: null
    //     };
    // }

    state = {
        show: true
    }

    handleClick = () => {
        console.log(this);
        // this.refs.txt.focus();
        // this.refs.compA.method();

        // 对象
        // this.textRef.current.focus();
        // 函数
        // this.textRef.focus();

        this.setState({
            show: !this.state.show
        });
    }

    componentDidMount() {
        console.log('didMount', this.textRef);
    }
    // componentDidUpdate(prevProps, prevState) { first} 
    getRef = el => {
        console.log('函数被调用', el);
        this.textRef = el;
    }
    render() {
        return (
            <div>
                {/* <input ref="txt" type="text" /> */}
                <A ref="compA" />
                {/* 函数组件不能使用ref，会报错 */}
                {/* <B ref="CompB" /> */}

                {/* 目前推荐这种写法 */}
                {/* 对象写法 */}
                {/* <input ref={this.textRef} type="text" /> */}
                {/* 函数写法 */}

                {this.state.show && <input ref={this.getRef} type="text" />}
                <button onClick={this.handleClick} >{this.state.show ? '隐藏' : '显示'}</button>
            </div>
        )
    }
}
