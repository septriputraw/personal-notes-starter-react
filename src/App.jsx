import React, { useEffect, useState } from 'react';
import BodyComponent from './components/BodyComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { getInitialData } from './utils';

function App() {
  const [query, setQuery] = useState('');
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesAll = (searchNotes || notes).filter((note) => !note.archived);
  const notesArchive = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())),
    );
  }, [query, notes]);

  return (
    <div className="note-app">
      <HeaderComponent search={query} setQuery={setQuery} />
      <BodyComponent
        notesAll={notesAll}
        notesArchive={notesArchive}
        setNotes={setNotes}
      />
      <FooterComponent />
    </div>
  );
}

export default App;
