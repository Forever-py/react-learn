import React from 'react';
import ReactDOM from 'react-dom/client';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp';

const root = ReactDOM.createRoot(document.getElementById('root'))

// function MyFuncComp() {
//     return <h1>组件内容</h1>
// }

const comp = <MyFuncComp />; // 使用组件，生成的，仍然是一个React元素，变化的，只是type值
console.log(comp)

// root.render(<div>{MyFuncComp()}</div>)
root.render(<div><MyFuncComp /><MyClassComp /></div>)