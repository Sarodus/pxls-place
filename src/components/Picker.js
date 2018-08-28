import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pickColor, addColor, removeColor, resetColors } from '../actions'

class Picker extends Component {
    renderColor = color => (
        <div
            key={color}
            onClick={() => this.props.pickColor(color)}
            className="color"
            style={{backgroundColor: color}}
        ></div>
    )

    render() {
        return (
            <div className="picker">
                {this.props.pallete.map(this.renderColor)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    display: state.controls.display,
    pallete: state.controls.pallete
})

const mapDispatchToProps = dispatch => ({
    pickColor: color => dispatch(pickColor(color)),
    addColor: color => dispatch(addColor(color)),
    removeColor: color => dispatch(removeColor(color)),
    resetColors: () => dispatch(resetColors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Picker)