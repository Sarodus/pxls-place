import React, { Component } from 'react'
import PxlsPlace from './components/PxlsPlace'
import Controls from './components/Controls'
import Picker from './components/Picker'

class App extends Component {
  render() {
    return (
      <div>
        <PxlsPlace />
        <Controls />
        <Picker />
      </div>
    )
  }
}

export default App
