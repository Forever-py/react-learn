import React from 'react';
import ReactDOM from 'react-dom/client';
// import Tick from './componenets/Tick';
import TickControl from './componenets/TickControl';
const root = ReactDOM.createRoot(document.getElementById('root'))

function handleClick() {
    console.log('点击了！');
}

const btn = <button onClick={handleClick}>点击我</button>

const btn1 = <button onClick={() => {
    console.log('点击了！！');
}} onMouseEnter={(e) => {
    console.log("鼠标移入了！！", e)
}}>点击我1</button>

root.render(<>
    {btn}
    {btn1}
    {/* <Tick number={10}/> */}
    <TickControl />
</>)