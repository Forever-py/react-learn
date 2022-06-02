import React, { Component } from 'react'
import types from '../../../utils/CommonTypes'
import PropTypes from 'prop-types'
import withDataGroup from '../HOC/withDataGroup'

class Option extends Component {

    static propTypes = {
        info: types.singeData.isRequired
    }

    render() {
        return (<option value={this.props.info.value}>{this.props.info.text}</option>)
    }
}

const OptGroup = withDataGroup(Option);

/**
 * 一组多选框
 */
export default class Select extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    render() {
        return (
            <select name={this.props.name} value={this.props.value} onChange={(e) => {
                this.props.onChange && this.props.onChange(e.target.value);
            }}>
                <OptGroup {...this.props} />
            </select>
        )
    }
}
