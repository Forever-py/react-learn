import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));;

// // 只能有一个根节点 <></> 等价于<React.Fragment></React.Fragment>
// const h2 = (
//     // <>
//     //     <h1 title="第一个React元素">hello, world!</h1>
//     //     <span>你好啊!</span>
//     // </>
//     <React.Fragment>
//         <h3 title="第一个React元素">hello, world!</h3>
//         <span>你好啊!</span>
//     </React.Fragment>
// )

// const h1 = (<h1 title="第一个React元素">hello, world!<span>你好啊!</span>{h2}</h1>);

// root.render(h1);

// const img = (
//     <img src="https://img1.baidu.com/it/u=2847626372,3815971220&fm=253&fmt=auto&app=138&f=JPEG?w=708&h=500" alt="" srcset="" />
// );

// root.render(img)


// 嵌入表达式
// const a = 1234,
//     b = 2;

// // const div = (<div> {a} * {b} = {a * b}</div>);
// // 原理 等价于
// // const div = React.createElement('div', {}, `${a} * ${b} = ${a * b}`)

// // 这是一个普通对象
// // const obj = {
// //     a: 1,
// //     b: 2
// // }

// // 这是一个React元素对象
// const span = (<span>hello, world!</span>);

// // 这是一个数组对象
// const arr = [1, 2, 3];

// const numbers = new Array(30).fill(0);
// var lis = numbers.map((item, i) => (<li key={i}>{i}</li>))
// const div = (
//     <>
//         {/* 包裹的内容部分，将不会显示  及注释 */}
//         <div> {a} * {b} = {a * b}</div>
//         <p>{undefined}{null}{false}{0}</p>
//         <p>
//             {/* 普通对象无法放置 */}
//             {/* {obj} */}
//         </p>
//         <p>
//             {/* 元素对象可以放置 */}
//             {span}
//         </p>
//         <p>
//             {/* 数组对象可以放置 */}
//             {arr}
//         </p>
//         <ul>
//             {lis}
//         </ul>
//     </>
// )

// 属性使用小驼峰命名法
// const url = "https://img1.baidu.com/it/u=2847626372,3815971220&fm=253&fmt=auto&app=138&f=JPEG?w=708&h=500";
// const cls = "image";
// const div = (
//     <div>
//          <img src={url} alt="" className={cls} style={{marginLeft:'20px'}} srcset="" />
//     </div>
// )

// 防止注入攻击
// const content = "<h1>aa</h1><p>bb</p>"
// const div = (
//         // <div>
//         //     {content}
//         // </div>
//         <div dangerouslySetInnerHTML={{
//             __html:content
//         }}></div>
// )

let num = 1;
setInterval(() => {
    num++;
    const div = (
        <div>{num}</div>
    );
    root.render(div)
}, 1000)