import React, { Component } from "react";
import CheckBoxGroup from "./index";
import { getAllStudent } from "../../../services/student";

export default class Test extends Component {
  state = {
    datas: [],
    chooseDatas: [],
  };

  async componentDidMount() {
    const stus = await getAllStudent();
    this.setState({
      datas: stus.map((it) => ({ value: it.id.toString(), text: it.name })),
    });
  }
  render() {
    return (
      <div>
        <CheckBoxGroup
          name="loves"
          datas={this.state.datas}
          chooseDatas={this.state.chooseDatas}
          onChange={(newArr) => {
            this.setState({ chooseDatas: newArr });
          }}
        />
      </div>
    );
  }
}
