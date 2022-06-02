import React, { Component } from "react";
import Select from "./index";
import { getAllStudent } from '../../../services/student';

export default class Test extends Component {
    state = {
        datas: [],
        value: '',
    };

    async componentDidMount() {
        const stus = await getAllStudent();
        this.setState({
            datas: stus.map(it => ({ value: it.id.toString(), text: it.name }))
        })
    }
    render() {
        return (
            <div>
                <Select
                    name="loves"
                    {...this.state}
                    onChange={(value) => {
                        this.setState({ value });
                    }}
                />
            </div>
        );
    }
}
