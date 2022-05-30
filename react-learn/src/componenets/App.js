import React, { Component } from "react";
import FormTest from "./common/FormTest";
// import NumberInput from "./NumberInput";
export default class App extends Component {
  // state = {
  //   val: "123",
  //   checked: true,
  //   loves: ["足球", "篮球", "棒球", "乒乓球"],
  //   chooseLoves: ["篮球"],
  //   selVal: ""
  // };
  render() {
    // const checkboxes = this.state.loves.map((it) => (
    //   <label>
    //     <input
    //       type="checkbox"
    //       checked={this.state.chooseLoves.includes(it)}
    //       onChange={(e) => {
    //         if (e.target.checked) {
    //           this.setState({ chooseLoves: [...this.state.chooseLoves, it] });
    //         } else {
    //           this.setState({ chooseLoves: this.state.chooseLoves.filter(item => item !== it) });
    //         }
    //       }}
    //     />
    //     {it}
    //   </label>
    // ));
    return (
      <div>
        <FormTest />
        {/* 默认情况下，它是一个非受控组件 */}
        {/* <input type="text" /> */}

        {/* <input type="text" value={this.state.val} onChange={e => {
          this.setState({ val: e.target.value })
        }} />

        <button onClick={() => {
          console.log(this.state.val)
        }}>获取文本框的值</button>

        <NumberInput />

        <input type="checkbox" checked={this.state.checked} onChange={e => {
          this.setState({ checked: e.target.checked })
        }} /> */}

        {/* {checkboxes}
        <button onClick={() => {
          console.log(this.state.chooseLoves)
        }}>获取文本框的值</button>


        <select value={this.state.selVal} onChange={e => {
          this.setState({ selVal: e.target.val })
        }}>
          <option value="bejing">北京</option>
          <option value="shanghai">上海</option>
          <option value="guangzhou">广州</option>
        </select> */}
      </div>
    );
  }
}
