import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Page extends Component {
    
    render () {
        const { id, title } = this.props

        return (
            <tr>
                <th>{id}</th>
                <td>{title}</td>
                <td>
                <Link to={{ pathname: `/pages/${id}` }}>Show</Link>
                </td>
            </tr>
        )
    }
}