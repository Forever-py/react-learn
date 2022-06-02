import React, { Component } from 'react'

export default class FormTest extends Component {
    state = {
        loginId: '',
        loginPwd: '',
        sex: 'male',
        loves: [
            { text: "足球", value: 'football' },
            { text: "篮球", value: 'baseketball' },
            { text: "乒乓球", value: 'pinpang' },
            { text: "其他", value: 'other' }],
        chooseLoves: [],
        city: 'beijing',
    }

    handleChange = e => {
        let val = e.target.value;
        let name = e.target.name;
        if (e.target.type === 'checkbox') {
            // 对val进行特殊处理
            if (e.target.checked) {
                this.setState({ [name]: [...this.state.chooseLoves, val] });
            } else {
                this.setState({ [name]: this.state.chooseLoves.filter(item => item !== val) });
            }
        } else {
            this.setState({ [name]: val })
        }
    }

    /**
     * 获取所有的爱好多选项
     */
    getLoveCheckBoxes() {
        const checkboxes = this.state.loves.map((it) => (
            <label key={it.value}>
                <input
                    name='chooseLoves'
                    type="checkbox"
                    checked={this.state.chooseLoves.includes(it.value)}
                    value={it.value}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ));
        return checkboxes;
    }
    render() {
        const bs = this.getLoveCheckBoxes();
        return (
            <div>
                <p>
                    <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange} />
                </p>
                <p>
                    <input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange} />
                </p>
                <p>
                    <select name="city" value={this.state.city} onChange={this.handleChange}>
                        <option value="bejing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="guangzhou">广州</option>
                    </select>
                </p>
                <p>
                    <label >
                        <input type="radio" name="sex" value='male' checked={this.state.sex === 'male'} onChange={this.handleChange} />
                        男
                    </label>
                    <label >
                        <input type="radio" name="sex" value='female' checked={this.state.sex === 'female'} onChange={this.handleChange} />
                        女
                    </label>
                </p>
                <p>{bs}</p>
                <p>
                    <button onClick={() => {
                        console.log(this.state)
                    }}>获取表单数据</button>
                </p>
            </div>
        )
    }
}
