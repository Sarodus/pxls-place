import React from 'react'
import { connect } from 'react-redux'

const ColorBtn = ({color}) =>
    <div className="current-color" style={{backgroundColor: color}}></div>

const mapStateToProps = state => ({
    color: state.controls.color
})

export default connect(mapStateToProps)(ColorBtn)
