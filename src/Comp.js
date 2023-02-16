import React from "react";
import { useParams } from "react-router-dom";
import { Number } from "./Number";
import { Name } from "./Name";

export const Comp = () => {
  const params = useParams();
  return params.isName ? <Name /> : <Number />;
};
