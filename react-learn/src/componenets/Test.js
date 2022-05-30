import React, { Component } from 'react'
import Modal from './common/Modal'
export default class Test extends Component {
    state = {
        showModal: false,
    }
    switchModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }
    render() {
        return (<>
            <div>{this.state.showModal ? (<Modal onClose={this.switchModal}>
                <div style={{background:'#fff'}}>
                <h1>蒙层</h1>
                <button onClick={ this.switchModal}>隐藏</button>
                </div>
            </Modal>) : null} </div>
            <button onClick={this.switchModal}>显示</button>
        </>
        )
    }
}
