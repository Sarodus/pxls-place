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
    pixels: [],
  }

  placePixel = e => {
    const x = Math.floor((e.pageX - e.target.offsetLeft) / SIZE)
    const y = Math.floor((e.pageY - e.target.offsetTop) / SIZE)
    this.setState({
      pixels: this.state.pixels.concat({x, y})
    })
  }

  render() {
    return (
      <div className="place center" onClick={this.placePixel}>
        {this.state.pixels.map((p, key) => <Pixel key={key} {...p} />)}
      </div>
    )
  }
}

export default PxlsPlace
