import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, UserInformation } from '.';
import { contacts } from '../Store';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main contacts={contacts} />}></Route>
      <Route path="/:id/:isName?" element={<UserInformation contacts={contacts} />}></Route>
    </Routes>
  );
};
