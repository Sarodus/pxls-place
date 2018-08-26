import React, { Component } from 'react'
import { connect } from 'react-redux'

const SIZE = 5

const Pixel = ({x, y, c}) => {
    const style = {
        left: x * SIZE,
        top: y * SIZE,
        width: SIZE,
        height: SIZE,
        backgroundColor: c
    }
    return <div className="pixel" style={style}></div>
}

class PxlsPlace extends Component {
    state = {
        pixels: [
            {x: 10, y: 20}
        ],
        height: window.innerHeight
    }

    constructor(props) {
        super(props)
        this.setHeightTimeout = null
    }

    componentWillMount() {
        clearInterval(this.setHeightTimeout)
        this.setHeightTimeout = setTimeout(this.setHeight, 200)
    }

    setHeight = () => {
        this.setState({
            height: window.innerHeight
        })
    }

    placePixel = e => {
        const x = Math.floor((e.pageX - e.target.offsetLeft) / SIZE)
        const y = Math.floor((e.pageY - e.target.offsetTop) / SIZE)
        const c = this.props.color
        this.setState({
            pixels: this.state.pixels.concat({x, y, c})
        })
    }

    render() {
        const {height, pixels} = this.state
        return (
            <div className="place" onClick={this.placePixel} style={{height}}>
                <div className="scroll" onClick={this.placePixel}>
                    {pixels.map((p, key) => <Pixel key={key} {...p} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    color: state.controls.color
})

export default connect(mapStateToProps)(PxlsPlace)