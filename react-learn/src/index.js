import React from 'react';
import ReactDOM from 'react-dom/client';
// import Ball from './componenets/Ball';
import BallList from './componenets/BallList';
const root = ReactDOM.createRoot(document.getElementById('root'))

// const obj = {
// left: 100,
// top: 100,
// xSpeed: 200,
// ySpeed: 150,
// bg:'#00ffff'
// }
// root.render(<Ball {...obj}/>)
root.render(<BallList/>)