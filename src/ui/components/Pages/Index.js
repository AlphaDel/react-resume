import React from 'react'
import Page from './Page'

const Pages = ({
      pages,
      onReloadPages
    }) => (
      <div className="container">
      <button 
        className='button'
        onClick={() => onReloadPages()}>
        Reload Pages
      </button>
      <hr />
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
            pages.map((page) => (
              <Page
                key={page.id}
                id={page.id}
                title={page.title} />
            ))
          }
        </tbody>
      </table>
      </div>
    )

export default Pages