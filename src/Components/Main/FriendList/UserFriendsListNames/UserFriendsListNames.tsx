import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Props } from '../../../../Store/Store';

export const UserFriendsListNames: React.FC<Props> = ({ contacts }) => {
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
    const userUrl = `../${currentUserFriend?.id}`;
    return (
      <div key={currentUserFriend?.id}>
        <Link to={userUrl}>{currentUserFriend?.name}</Link>
      </div>
    );
  });

  const userUrl = `../${currentUser?.id}`;

  return (
    <div className="notMain">
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
