import React from 'react';
import ReactDOM from 'react-dom/client';
// https://open.duyiedu.com/api/student/findAll?appkey=jerry_1602593073067

import StudentsList from './components/StudentsList';
const root = ReactDOM.createRoot(document.getElementById('root'))

const appkey = "jerry_1602593073067";

/**
 * 获取所有的学生数据
 */
async function fetchAllStudents() {
    // resp.json() 解析成json格式
    const stus = await fetch("https://open.duyiedu.com/api/student/findAll?appkey=" + appkey).then(resp => resp.json()).then(resp => resp.data);
    return stus
}

async function render() {
    root.render(<div>正在加载中...</div>)
    const stus = await fetchAllStudents(); // 获取学生数据
    root.render(<ul>
        <StudentsList stus={stus} />
    </ul>)
}

render();