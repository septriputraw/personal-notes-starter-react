/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import ActionComponent from './ActionComponent';
import ItemComponent from './ItemComponent';
import { handleClickConfirm } from './SweetAlert';

function DataItem({
  id, title, body, createdAt, archived, action,
}) {
  const onDeleteNote = (item) => {
    handleClickConfirm(
      item,
      action,
      'delete',
      'Are you sure?',
      "You won't be able to revert this!",
      'warning',
      'Yes, delete it!',
    );
  };

  const onArchiveNote = (item) => {
    !archived
      ? handleClickConfirm(
        item,
        action,
        'archive',
        'Are you sure?',
        "Do you want to 'archive' this note?",
        'info',
        'Yes, archive it!',
      )
      : handleClickConfirm(
        item,
        action,
        'unarchive',
        'Are you sure?',
        "Do you want to 'unarchive' this note?",
        'info',
        'Yes, unarchive it!',
      );
  };

  return (
    <div className="note-item">
      <ItemComponent
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        action={action}
      />

      <ActionComponent
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        id={id}
        archived={archived}
      />
    </div>
  );
}

export default DataItem;
