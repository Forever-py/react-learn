import React, { Component } from "react";
import ThreeLayout from "./common/ThreeLayout";
export default class App extends Component {
  render() {
    return (
      <div>
        <ThreeLayout gap={20} left={<div>left</div>} right={<div>right</div>}>
          <div style={{ border: '2px solid #f40' }}>
            <h1>主区域</h1>
            <p>aaaaaaaaa</p>
          </div>
        </ThreeLayout>
      </div>
    );
  }
}
