import React from 'react';
import NoteItem from './NoteItem';

export default  function NoteList({ notes, onDelete}) {
    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <p className='.notes-list__empty-message'>Catatan Kosong</p>
            ) : (
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note} />
                ))
            )}
        </div>
    );
}

