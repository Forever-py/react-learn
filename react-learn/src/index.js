import React from 'react';
import ReactDOM from 'react-dom/client';
import Tick from './componenets/Tick';
const root = ReactDOM.createRoot(document.getElementById('root'))
let number = 10;
// function start() {
//     const timer = setInterval(() => {
//         number--;
//         if (number === 0) {
//             clearInterval(this.timer);
//             return;
//         }
//         root.render(<Tick number={number} />)
//     }, 1000)
// }

// start();

root.render(<Tick number={number} />)