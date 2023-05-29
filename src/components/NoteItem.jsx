import React from 'react'
import NoteItemBody from './NoteItemBody'
import DeleteButton from './DeleteButton'

export default function NoteItem({ title, body, createdAt, id, onDelete}) {
  return (
    <div className="note-item">
            <div className="note-item__content">
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
  )
}
