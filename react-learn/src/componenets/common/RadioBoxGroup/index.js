import React, { Component } from 'react'

/**
 * 一组多选框
 */

export default class RadioBoxGroup extends Component {

    handleChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    /**
     * 得到一组多选框
     */
    getRadioBoxes() {
        const result = this.props.datas.map(it => (
            <label key={it.value}>
                <input type="radio" name={this.props.name} value={it.value} checked={this.props.value===it.value} onChange={this.handleChange} />
                {it.text}
            </label>
        ))
        return result;
    }

    render() {
        const bs = this.getRadioBoxes();
        return (
            <div>{bs}</div>
        )
    }
}