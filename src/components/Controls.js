import React, { Component } from 'react'
import ColorBtn from './ColorBtn'

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
                this.zoomIn()
                break

            case '-':
                this.zoomOut()
                break

            default:
                break
        }
    }

    zoomIn = () => {
        console.log('zoom in!')
    }

    zoomOut = () => {
        console.log('zoom out!')
    }

    render() {
        return (
            <div className="controls">
                <button onClick={this.zoomIn} className="btn zoom in">+</button>
                <button onClick={this.zoomOut} className="btn zoom out">-</button>
                <ColorBtn />
            </div>
        )
    }
}

export default Controls
