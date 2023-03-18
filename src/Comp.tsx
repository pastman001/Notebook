import React from 'react';
import { useParams } from 'react-router-dom';
import { Name } from './Name';
import { Number } from './Number';

export const Comp = () => {
  const params = useParams();
  return params.isName ? <Name /> : <Number />;
};
