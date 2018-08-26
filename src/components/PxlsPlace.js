import React, { Component } from 'react'

const WIDTH = 1600
const HEIGHT = 900
const SIZE = 5
const ROWS = WIDTH / SIZE
const COLS = HEIGHT / SIZE

const Pixel = ({x, y}) =>
    <div className="pixel" style={{left: x * SIZE, top: y * SIZE, width: SIZE, height: SIZE}}></div>

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
        console.log(e.pageY, e.target.offsetTop, window.pageYOffset)
        const x = Math.floor((e.pageX - e.target.offsetLeft) / SIZE)
        const y = Math.floor((e.pageY - e.target.offsetTop) / SIZE)
        this.setState({
            pixels: this.state.pixels.concat({x, y})
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

export default PxlsPlace
