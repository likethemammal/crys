import React, { Component } from 'react'

import connect from './App.connect'

import Example from './Example'
import SVG from './SVG'

import PLAY_SVG from '../assets/icons/play_arrow.svg'

class App extends Component {

    onButtonClick = () => {
        const { changeAction, on } = this.props

        changeAction(!on)
    }

    render() {
        const { on } = this.props

        return <div>
            <div onClick={this.onButtonClick}>Click Me!</div>
            <SVG raw={PLAY_SVG} />
            {on && <Example/>}
        </div>
    }
}

export default connect(App)