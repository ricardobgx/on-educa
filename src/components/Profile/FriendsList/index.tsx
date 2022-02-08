import React from 'react';
import { IPeople } from '../../../interfaces/IPeople';
import FriendCard from '../FriendCard';
import { FriendsListBox } from './styles';

interface IFriendsListProps {
  loggedPeople: IPeople;
  token: string;
  friends: IPeople[];
}

const FriendsList = (props: IFriendsListProps): JSX.Element => {
  const { loggedPeople, token, friends } = props;

  return (
    <FriendsListBox>
      {friends.map((friend) => (
        <FriendCard
          key={friend.id}
          loggedPeople={loggedPeople}
          people={friend}
          token={token}
        />
      ))}
    </FriendsListBox>
  );
};

export default FriendsList;
