import React from 'react';
import { MainUserNames, MainUserNumbers } from '.';
import { Props } from '../../Store/Store';
import './style.css';

export const Main: React.FC<Props> = ({ contacts }) => {
  return (
    <div>
      <div className="main">
        <div className="container">Имена</div>
        <div className="container">Номера Телефонов</div>
        <div className="container">
          <MainUserNames contacts={contacts} />
        </div>
        <div className="container">
          <MainUserNumbers contacts={contacts} />
        </div>
      </div>
    </div>
  );
};
