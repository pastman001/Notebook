import React from 'react';
import { Names } from './comp/Names';
import { Numbers } from './comp/Numbers';
import './style.css';

export const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="container">Имена</div>
        <div className="container">Номера Телефонов</div>
        <div className="container">
          <Names />
        </div>
        <div className="container">
          <Numbers />
        </div>
      </div>
    </div>
  );
};
