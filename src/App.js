import React from "react";
import { Main } from "./Main";
import { Route, Routes, Link } from "react-router-dom";
import { Comp } from "./Comp";

export const App = () => {
  return (
    <div>
      <Link to="/"></Link>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id/:isName?" element={<Comp />}></Route>
      </Routes>
    </div>
  );
};
