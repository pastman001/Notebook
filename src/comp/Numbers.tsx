import React from 'react';
import { Link } from 'react-router-dom';
import { contacts } from '../Arr';
import '../style.css';

export const Numbers = () => {
  return (
    <>
      {contacts.map((item) => {
        const numUrl = `${item.id}`;
        const key = `numbersKeyId${item.id}`;
        return (
          <div key={key}>
            <Link to={numUrl}>{item.phoneNumber}</Link>
          </div>
        );
      })}
    </>
  );
};
