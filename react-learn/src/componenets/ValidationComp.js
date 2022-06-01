import React, { Component } from "react";
import PropTypes from "prop-types";

export class A {

}

export class B extends A {

}


export default class ValidationComp extends Component {

    // 先混合
    static defaultProps = {
        a: 2,
        b: true,
    };

    // 再验证
    static propTypes = {
        a: PropTypes.number.isRequired, // a是数字类型，并且必填
        b: PropTypes.bool.isRequired, // b是一个布尔类型，并且必填
        onClick: PropTypes.func, // 必须是函数
        c: PropTypes.elementType, // 组件类型
        d: PropTypes.instanceOf(A).isRequired, // d必须是A的实例
        sex: PropTypes.oneOf(['男', '女']),
    };

    render() {
        const C = this.props.c;
        return (
            <div>
                a: {this.props.a}, b: {this.props.b ? "是" : "否"}
                <C />
            </div>
        );
    }
}
