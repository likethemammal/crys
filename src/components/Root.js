import React, { Component } from 'react'
import { Provider } from "react-redux"
import { appStore } from "../store"
import App from './App'

import global_css from '@likethemammal/general-components/bin/global.css'

class Root extends Component {
    render() {
        return <Provider store={appStore}>
            <App />
        </Provider>
    }
}

export default Root;
