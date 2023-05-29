import React from 'react'

export default function NoteContent({title,createdAt,body}) {
  return (
    <div className='note-item__content'>
        <h1>{title}</h1>
        <span >{createdAt}</span>
        <p>{body}</p>
    </div>
  )
}
