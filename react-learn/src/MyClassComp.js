import React from "react"
export default class MyClassComp extends React.Component {

    // 可以不写
    // constructor(props) {
    //     super(props);  // this.props = props;
    //     console.log(props)
    // }

    /**
     * 该方法必须返回React元素
     */
    render() {
        console.log(this.props);
        if (this.props.obj) {
            return (<><span>姓名：{this.props.obj.name}</span><span>年龄：{this.props.obj.age}</span></>);
        } else if (this.props.ui) {
            return (<div>
                <h1>下面是传入的内容</h1>
                {this.props.ui}
            </div>);
        }
        return (<h1>类组件，数字：{this.props.number}</h1>);
    }
}