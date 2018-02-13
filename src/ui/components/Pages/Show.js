import React from 'react'

const ShowPage = ({
  data,
  content
}) => (
   
    <div className='container'>
    <article>
    {
      data.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>
      ))
    }

    </article>
    </div>
  
)
export default ShowPage