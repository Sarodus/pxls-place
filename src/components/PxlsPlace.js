import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pixelCreate } from '../actions'

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
        const { zoom } = this.props
        const x = Math.floor((e.pageX - e.target.offsetLeft) / SIZE / zoom)
        const y = Math.floor((e.pageY - e.target.offsetTop) / SIZE / zoom)
        const c = this.props.color
        const pixel = {x, y, c}
        this.props.pixelCreate(pixel)
    }

    render() {
        const { height } = this.state
        const { zoom, pixels } = this.props
        return (
            <div className="place" onClick={this.placePixel} style={{height, zoom}}>
                <div className="scroll">
                    {pixels.map((p, key) => <Pixel key={key} {...p} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    color: state.controls.color,
    zoom: state.controls.zoom,
    pixels: state.pixel.pixels
})
const mapDispatchToProps = dispatch => ({
    pixelCreate: pixel => dispatch(pixelCreate(pixel))
})

export default connect(mapStateToProps, mapDispatchToProps)(PxlsPlace)