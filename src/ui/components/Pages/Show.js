import React from 'react'

const ShowPage = ({
  title,
  content
}) => (
   
    <div className='container'>
    <article>
    {
      <article>
        <h1>{title}</h1>
        <p>
          {content}
        </p>
      </article>
    }

    </article>
    </div>
  
)
export default ShowPage