import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { contacts } from './Arr';

export const Name = () => {
  const params = useParams<string>();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const currentUser = contacts.find((item) => {
    return item.id.toString() === params.id;
  });

  const userFriends = currentUser?.friends.map((item) => {
    const currentUserFriend = contacts.find((contactsItem) => {
      return contactsItem.id === item;
    });
    const userUrl = `../${currentUserFriend?.id}/1`;
    return (
      <div key={currentUserFriend?.id}>
        <Link to={userUrl}>{currentUserFriend?.name}</Link>
      </div>
    );
  });

  const userUrl = `../${currentUser?.id}`;

  return (
    <div className="notmain">
      <div className="container">
        <div>Номер пользователя:</div>
        <Link to={userUrl}>{currentUser?.phoneNumber}</Link>
      </div>
      <div className="container">
        Имена друзей:
        {userFriends}
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  );
};
