import React, { Component } from 'react'

import css from './Example.less'

export default class Example extends Component {
    static defaultProps = {
        className: css.container,
    }

    render() {

        const { className } = this.props

        return <div className={className}>
            I'm here cus you clicked!
        </div>
    }
}