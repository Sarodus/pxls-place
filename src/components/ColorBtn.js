import React, { Component } from 'react'
import { connect } from 'react-redux'
import { togglePicker } from '../actions'

class ColorBtn extends Component {
    render() {
        const { color } = this.props
        return (
            <div className="btn color" style={{backgroundColor: color}} onClick={this.props.togglePicker}></div>
        )
    }
}

const mapStateToProps = state => ({
    color: state.controls.color
})

const mapDispatchToProps = dispatch => ({
    togglePicker: () => dispatch(togglePicker())
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorBtn)