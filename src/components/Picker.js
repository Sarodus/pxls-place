import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pickColor } from '../actions'

class Picker extends Component {
    render() {
        const { display, color, pickColor } = this.props
        if (!display) return null

        return (
            <div className="picker" onClick={() => pickColor('green')}>zzz</div>
        )
    }
}

const mapStateToProps = state => ({
    color: state.controls.color,
    display: state.controls.display
})

const mapDispatchToProps = dispatch => ({
    pickColor: color => dispatch(pickColor(color))
})

export default connect(mapStateToProps, mapDispatchToProps)(Picker)