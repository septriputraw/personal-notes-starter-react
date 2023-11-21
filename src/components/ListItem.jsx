/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import DataItem from './DataItem';

function LlistItem({ notes, label, setNotes }) {
  return (
    <>
      <h2>{label}</h2>
      <div className="note-lists">
        {notes.length === 0 ? (
          <p className="note-lists-empty-message">Nothing Data To Show</p>
        ) : (
          notes.map((note) => (
            <DataItem action={setNotes} key={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
}

export default LlistItem;
