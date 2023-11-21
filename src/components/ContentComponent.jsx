/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import InputComponent from './InputComponent';
import { handleClick } from './SweetAlert';

function ContentComponent({ setNotes }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !body) {
      handleClick({
        title: 'Error',
        text: 'Judul dan isi catatan tidak boleh kosong',
        icon: 'error',
      });
      return;
    }

    const id = new Date().toISOString();
    const note = {
      id, title, body, archived: false, createdAt: id,
    };

    setNotes((prevNotes) => [...prevNotes, note]);
    setTitle('');
    setBody('');
  };

  return (
    <div className="note-input">
      <h2>New Notes</h2>
      <form onSubmit={handleSubmit}>
        <p className="note-input-title-char-limit">
          Characters left:
          {' '}
          {50 - title.length}
        </p>
        <InputComponent
          value={title}
          onChange={setTitle}
          name="title"
          type="text"
          placeholder="Masukkan judul catatan..."
        />
        <InputComponent
          value={body}
          onChange={setBody}
          name="body"
          type="textarea"
          placeholder="Masukkan isi catatan..."
        />
        <button
          type="submit"
          className="create-btn"
          onClick={() => handleClick({
            title: 'Sukses, catatan telah dibuat',
            text: `Catatan dengan judul ${title} telah dibuat`,
            icon: 'success',
          })}
        >
          Buat
        </button>
      </form>
    </div>
  );
}

export default ContentComponent;
