/* eslint-disable react/prop-types */
import React from 'react';
import InputComponent from './InputComponent';

function HeaderComponent({ search, setQuery }) {
  return (
    <div className="note-app-header">
      <h1>Notes App</h1>
      <div className="note-app-search">
        <InputComponent
          value={search}
          onChange={setQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Cari catatan..."
        />
      </div>
    </div>
  );
}

export default HeaderComponent;
