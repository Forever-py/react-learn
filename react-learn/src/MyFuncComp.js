import React from "react"

export default function MyFuncComp (props) {
    // return <h1>函数组件</h1>

    // props.number = 20; 运行会报错  组件无法改变自身的属性
    return <h1>函数组件，目前的数字：{props.number}</h1>
}