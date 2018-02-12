import React, { Component } from 'react'

export default class Page extends Component {
    
    render () {
        const { id, title } = this.props

        return (
            <tr>
                <th>{id}</th>
                <td>{title}</td>
                <td>
                    <a href='javascript:void(0)'>show</a>
                </td>
            </tr>
        )
    }
}