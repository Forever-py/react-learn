import React, { Component } from 'react'
import types from '../../../utils/CommonTypes'
import PropTypes from 'prop-types'

/**
 * 一组多选框
 */

export default class Select extends Component {

    /**
         * 默认属性值
         */
    static defaultProps = {
        datas: [],
        value: ''
    }

    static propTypes = {
        datas: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    handleChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    /**
     * 得到一组下拉列表
     */
    getSelectBoxes() {
        const result = this.props.datas.map(it => (
            <option value={it.value} key={it.value}>{it.text}</option>
        ))
        return result;
    }

    render() {
        const bs = this.getSelectBoxes();
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
                {bs}
            </select>
        )
    }
}
