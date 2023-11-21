/* eslint-disable react/prop-types */
import React from 'react';
import ContentComponent from './ContentComponent';
import ListItem from './ListItem';

function BodyComponent({ notesAll, notesArchive, setNotes }) {
  return (
    <div className="note-app-body">
      <ContentComponent setNotes={setNotes} />
      <ListItem label="All Notes" setNotes={setNotes} notes={notesAll} />
      <ListItem label="Archive Notes" setNotes={setNotes} notes={notesArchive} />
    </div>
  );
}

export default BodyComponent;
