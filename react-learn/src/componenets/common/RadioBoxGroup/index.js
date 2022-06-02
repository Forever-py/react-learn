import React, { Component } from 'react'
import types from '../../../utils/CommonTypes'
import PropTypes from 'prop-types'
import withDataGroup from '../HOC/withDataGroup'

class RadioBox extends Component {
    static propTypes = {
        info: types.singeData.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }
    handleChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value);
    }

    render() {
        return (<label>
            <input type="radio" name={this.props.name} value={this.props.info.value} checked={this.props.value === this.props.info.value} onChange={this.handleChange} />
            {this.props.info.text}
        </label>)
    }

}

/**
 * 一组多选框
 */
export default withDataGroup(RadioBox);