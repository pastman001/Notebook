import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Comp } from './Comp';
import { Main } from './Main';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id/:isName?" element={<Comp />}></Route>
      </Routes>
    </div>
  );
};
