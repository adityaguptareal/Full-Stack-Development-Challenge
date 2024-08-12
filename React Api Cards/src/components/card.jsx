import React from 'react'

function card(props) {
  return (
    <div className='bg-purple-500 max-w-[400px] max-h-[400px] overflow-hidden p-7 m-3 rounded-md text-white'>
      <h2 className='text-2xl font-bold'>{props.title}</h2>
      <p>{props.body}</p>
      <span>{`userid= ${props.userId}`}</span>
    </div>
  )
}

export default card
