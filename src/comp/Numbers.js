import React from "react";
import { contacts } from "../Arr";
import "../style.css";
import { Link } from "react-router-dom";

export const Numbers = () => {
  return contacts.map((item) => {
    const numUrl = `${item.id}`;
    const key = `numbersKeyId${item.id}`;
    return (
      <div key={key}>
        <Link to={numUrl}>{item.phoneNumber}</Link>
      </div>
    );
  });
};
