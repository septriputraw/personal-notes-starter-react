/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import { MdUnarchive, MdArchive } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

function ActionComponent({
  onDeleteNote, onArchiveNote, id, archived,
}) {
  return (
    <div className="note-item-action">
      <button
        id={id}
        onClick={() => onDeleteNote(id)}
        aria-label="Delete "
        className="note-item-delete-button"
        data-tooltip-id="delete"
        data-tooltip-content="Delete"
      >
        <Tooltip id="delete" place="bottom" effect="solid" />
        <IoMdTrash />
      </button>
      <button
        id={id}
        onClick={() => onArchiveNote(id)}
        aria-label="Archive "
        className="note-item-archive-button"
        data-tooltip-id="archive"
        data-tooltip-content={archived ? 'Unarchive' : 'Archive'}
      >
        <Tooltip id="archive" place="bottom" effect="solid" />
        {archived ? <MdUnarchive /> : <MdArchive />}
      </button>
    </div>
  );
}

export default ActionComponent;
