import React from 'react';
import { useParams } from 'react-router-dom';
import { UserFriendsListNames, UserFriendsListNumbers } from '.';
import { Props } from '../../../Store/Store';

export const UserInformation: React.FC<Props> = ({ contacts }) => {
  const params = useParams();
  return params.isName ? (
    <UserFriendsListNames contacts={contacts} />
  ) : (
    <UserFriendsListNumbers contacts={contacts} />
  );
};
