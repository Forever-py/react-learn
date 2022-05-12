import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componenets/App';
const root = ReactDOM.createRoot(document.getElementById('root'))

// // 函数组件  可以理解为没有生命周期
// function A () {
//     return <h1>aaaaaa</h1>
// }

// setInterval(()=> {
//     root.render(<A/>)
// }, 1000)

// class A {
//     render() {
//         return null
//     }
// }

// root.render(<>
//     <A /> {/* 相当于 new A */}
//     <A /> {/* 组件实例 */}
//     <A />
// </>)


root.render(<div><App/></div>)