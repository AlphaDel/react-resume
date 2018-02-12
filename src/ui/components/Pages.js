import React, { Component } from 'react'
import Page from './Page'

export default class Pages extends Component {

  render() {
    return (
      <table className='table'>
      <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.pages.map((page) => (
              <Page
                key={page.id}
                id={page.id}
                title={page.title} />
            ))
          }
        </tbody>
      </table>
    )
  }
}