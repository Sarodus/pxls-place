import React, { Component } from 'react'
import { connect } from 'react-redux'
import ColorBtn from './ColorBtn'
import Picker from './Picker'
import { zoomIn, zoomOut } from '../actions'

class Controls extends Component {
    componentWillMount() {
        document.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        switch (e.key) {
            case '+':
                this.props.zoomIn()
                break

            case '-':
                this.props.zoomOut()
                break

            default:
                break
        }
    }

    render() {
        const { zoomIn, zoomOut } = this.props
        return (
            <div className="controls">
                <button onClick={zoomIn} className="btn zoom in">+</button>
                <button onClick={zoomOut} className="btn zoom out">-</button>
                <ColorBtn />
                <Picker />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    zoomIn: () => dispatch(zoomIn()),
    zoomOut: () => dispatch(zoomOut()),
})

export default connect(null, mapDispatchToProps)(Controls)