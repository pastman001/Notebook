import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from '../../../Store/Store';
import '../style.css';

export const MainUserNumbers: React.FC<Props> = ({ contacts }) => {
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
