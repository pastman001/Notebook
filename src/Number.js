import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { contacts } from "./Arr";
import { Link } from "react-router-dom";

export const Number = () => {
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const currentUser = contacts.find((item) => {
    return item.id === +params.id;
  });

  const userFriends = currentUser.friends.map((item) => {
    const currentUserFriend = contacts.find((contactsItem) => {
      return contactsItem.id === item;
    });
    const userUrl = `../${currentUserFriend.id}`; //посмотреть
    return (
      <div key={currentUserFriend.id}>
        <Link to={userUrl}>{currentUserFriend.phoneNumber}</Link>
      </div>
    );
  });

  const userUrl = `../${currentUser.id}/1`;

  return (
    <div className="notmain">
      <div className="container">
        <div>Имя пользователя:</div>
        <Link to={userUrl}>{currentUser.name}</Link>
      </div>
      <div className="container">
        Номера друзей:
        {userFriends}
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  );
};
