import React, { Component } from 'react'

export default class ClassDefault extends Component {

    // 属性默认值
    static defaultProps = {
        a: 1,
        b:2
    }

    constructor (props) {
        super(props);
        console.log(props); // 在构造器中混合
    }
    render() {
        return (
            <div>
                a:{this.props.a},
                b:{this.props.b}
            </div>
        )
    }
}

// 属性默认值
// ClassDefault.defaultProps = {
//     a: 1,
//     b: 2
// }