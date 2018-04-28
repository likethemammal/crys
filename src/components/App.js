import React, { Component } from 'react'

import connect from './App.connect'

import Example from './Example'

import general from '@likethemammal/general-components'

const { SVG } = general.components

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

            <SVG style={{display: 'none'}} raw={PLAY_SVG} />
            {on && <Example/>}
        </div>
    }
}

export default connect(App)