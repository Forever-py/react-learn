import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import src1 from './assets/image1.jpg'
import src2 from './assets/image2.jpg'
import src3 from './assets/image3.jpg'

const conatiner = document.getElementById('root');
const root = ReactDOM.createRoot(conatiner)
const srcs = [src1, src2, src3]; // 保存图片路径
let index = 0; // 显示的图片索引
let timer = null;
/**
 * 根据index的值，显示某张图片
 */
function render() {
    root.render(<img src={srcs[index]} alt='' />)
}

/**
 * 启动定时器，每隔一段时间切换图片
 */

function start() {
    clearInterval(timer)
    timer = setInterval(() => {
        index = (index + 1) % 3;
        render();
    }, 1000)
}

/**
 * 停止计时器
 */

function stop() {
    clearInterval(timer);
}

render();
start();

conatiner.onmouseenter = function () {
    stop();
}

conatiner.onmouseleave = function () {
    start();
}