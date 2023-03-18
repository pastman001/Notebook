import React from 'react';
import { Link } from 'react-router-dom';
import { contacts } from '../Arr';
import '../style.css';

export const Names = () => {
  return (
    <>
      {contacts.map((item) => {
        const nameUrl = `${item.id}/1`;
        const key = `namesKeyId${item.id}`;
        return (
          <div key={key}>
            <Link to={nameUrl}>{item.name}</Link>
          </div>
        );
      })}
    </>
  );
};
