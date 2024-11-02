import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from '../../../Store/Store';
import '../style.css';

export const MainUserNames: React.FC<Props> = ({ contacts }) => {
  return (
    <>
      {contacts.map((item) => {
        const nameUrl = `${item.id}/names`;
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
