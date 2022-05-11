import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal'

export default class PagerTest extends Component {
    state = {
        current: 1,
        total: 0,
        limit: 10,
        panelNumber: 5,
        students: [],
        isLoading: false,
    }
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.fetchStudents();
    }
    /**
     * https://open.duyiedu.com
     * /api/student/findByPage
     * appkey String   必须 用户访问接口时所必须携带的身份凭据
     * page int 必须 第几页的页数，page值至少为1
     * size int 必须 每页显示的数量，size值至少为1
    */
    async fetchStudents() {
        this.setState({ isLoading: true })
        const resp = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=jerry_1602593073067&page=${this.state.current}&size=${this.state.limit}`)
            .then(resp => resp.json())
            .then(resp => resp.data)
        this.setState({
            total: resp.cont,
            students: resp.findByPage,
            isLoading: false,
        })
    }

    handlePageChange = (newPage) => {
        this.setState({ current: newPage })
        this.fetchStudents();
    }
    render() {
        return (
            <div className='contianer'>
                <StudentList stus={this.state.students} />
                <div className="pager">
                    <Pager {...this.state} onPageChange={this.handlePageChange} />
                </div>
                < Modal show={this.state.isLoading} />
            </div>
        )
    }
}
