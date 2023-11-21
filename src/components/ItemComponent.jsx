/* eslint-disable react/prop-types */
import React from 'react';
import { showFormattedDate } from '../utils';

function ItemComponent({ title, body, createdAt }) {
  return (
    <div className="note-item-content">
      <h3 className="note-item-title">{title}</h3>
      <p className="note-item-date">{showFormattedDate(createdAt)}</p>
      <p className="note-item-body">{body}</p>
    </div>
  );
}

export default ItemComponent;
