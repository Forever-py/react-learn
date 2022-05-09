import React, { Component } from 'react'
import Student from './Student'
export default class StudentsList extends Component {
    render() {
        // 约定：props.stus，传递的是学生的数组
        // 获取组件数组
       var students =  this.props.stus.map(item => <Student {...item} key={item.id}/>)
        return (
            <ul>
                {students}
            </ul>
        )
    }
}
